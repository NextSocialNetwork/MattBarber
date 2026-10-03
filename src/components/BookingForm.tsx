import React, { useState } from 'react';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Scissors,
  CheckCircle2,
  DollarSign,
  Copy,
  Check,
  ExternalLink,
  ChevronRight,
  ChevronLeft,
  X,
  Phone,
  AlertCircle
} from 'lucide-react';
import {
  SERVICES,
  BARBER_CONTACT,
  CHICAGO_NEIGHBORHOODS,
  TIME_SLOTS
} from '../data/barberData';
import { Appointment, LocationType, ServiceItem } from '../types';
import { Language, TRANSLATIONS } from '../i18n/translations';

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  initialServiceId?: string;
  initialLocationType?: LocationType;
  onBookingSuccess: (appointment: Appointment) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  isOpen,
  onClose,
  currentLang,
  initialServiceId = 'haircut',
  initialLocationType = 'in_studio',
  onBookingSuccess,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [step, setStep] = useState<number>(1);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId);
  const [locationType, setLocationType] = useState<LocationType>(initialLocationType);

  // Date selection (next 14 days)
  const availableDates = Array.from({ length: 14 }).map((_, index) => {
    const d = new Date();
    d.setDate(d.getDate() + index + 1);
    return {
      isoString: d.toISOString().split('T')[0],
      displayDay: d.toLocaleDateString('en-US', { weekday: 'short' }),
      displayDate: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      fullDate: d.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }),
    };
  });

  const [selectedDate, setSelectedDate] = useState<string>(availableDates[0].isoString);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[1]);

  // Client Details
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [chicagoAddress, setChicagoAddress] = useState<string>('');
  const [chicagoNeighborhood, setChicagoNeighborhood] = useState<string>(CHICAGO_NEIGHBORHOODS[0].name);
  const [notes, setNotes] = useState<string>('');
  const [hasSentDeposit, setHasSentDeposit] = useState<boolean>(false);
  const [cashAppHandle, setCashAppHandle] = useState<string>('');

  // UI States
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [copiedTag, setCopiedTag] = useState<boolean>(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Appointment | null>(null);

  if (!isOpen) return null;

  const currentService: ServiceItem =
    SERVICES.find((s) => s.id === selectedServiceId) || SERVICES[0];
  const travelFee = locationType === 'house_call' ? BARBER_CONTACT.houseCallFee : 0;
  const totalPrice = currentService.price + travelFee;

  const handleCopyTag = () => {
    navigator.clipboard.writeText(BARBER_CONTACT.cashAppTag);
    setCopiedTag(true);
    setTimeout(() => setCopiedTag(false), 2000);
  };

  const handleNext = () => {
    setErrorMsg('');
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      if (locationType === 'house_call' && !chicagoAddress.trim()) {
        setErrorMsg('Please enter your Chicago street address for the house call.');
        return;
      }
      setStep(3);
      return;
    }
    if (step === 3) {
      if (!selectedDate || !selectedTimeSlot) {
        setErrorMsg('Please select both a date and an available time slot.');
        return;
      }
      setStep(4);
      return;
    }
    if (step === 4) {
      if (!clientName.trim()) {
        setErrorMsg('Please enter your full name.');
        return;
      }
      if (!clientPhone.trim() || clientPhone.replace(/\D/g, '').length < 10) {
        setErrorMsg('Please enter a valid 10-digit phone number so Matt can confirm.');
        return;
      }
      if (!clientEmail.trim() || !clientEmail.includes('@')) {
        setErrorMsg('Please provide a valid email address for your confirmation receipt.');
        return;
      }

      // Process Booking
      const appointmentId = `MCC-${Math.floor(1000 + Math.random() * 9000)}`;
      const newAppointment: Appointment = {
        id: appointmentId,
        serviceId: currentService.id,
        serviceName: currentService.name,
        servicePrice: currentService.price,
        locationType,
        travelFee,
        totalPrice,
        date: selectedDate,
        timeSlot: selectedTimeSlot,
        clientName: clientName.trim(),
        clientPhone: clientPhone.trim(),
        clientEmail: clientEmail.trim(),
        chicagoAddress: locationType === 'house_call' ? chicagoAddress.trim() : undefined,
        chicagoNeighborhood: locationType === 'house_call' ? chicagoNeighborhood : undefined,
        notes: notes.trim() ? notes.trim() : undefined,
        cashAppStatus: locationType === 'house_call' ? (hasSentDeposit ? 'deposit_verified' : 'deposit_pending') : 'not_required',
        status: 'confirmed',
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      try {
        const saved = JSON.parse(localStorage.getItem('matt_cuts_chicago_bookings') || '[]');
        saved.unshift(newAppointment);
        localStorage.setItem('matt_cuts_chicago_bookings', JSON.stringify(saved));
      } catch (e) {
        console.error('Storage error', e);
      }

      setConfirmedBooking(newAppointment);
      onBookingSuccess(newAppointment);
    }
  };

  const handleDownloadCalendar = (appointment: Appointment) => {
    const title = `Matt Cuts Chicago: ${appointment.serviceName}`;
    const desc = `Barber: Matt (+1 312-385-9229)\\nService: ${appointment.serviceName}\\nLocation: ${appointment.locationType === 'house_call' ? appointment.chicagoAddress + ', Chicago IL' : 'Matt Cuts Chicago Studio'}\\nTotal: $${appointment.totalPrice}`;
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//MattCutsChicago//Booking//EN
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${desc}
LOCATION:${appointment.locationType === 'house_call' ? appointment.chicagoAddress : 'Chicago, IL'}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `TheGoatCuts-${appointment.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div>
            <div className="text-xs font-mono text-amber-400 font-bold flex items-center gap-1.5">
              <span>The Goat Cuts 🐐</span>
              <span className="text-neutral-600">·</span>
              <span className="text-neutral-400">{BARBER_CONTACT.website}</span>
            </div>
            <h2 className="text-lg font-bold text-neutral-100 font-display">
              {confirmedBooking ? t.booking.confirmedTitle : t.booking.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Confirmed State View */}
        {confirmedBooking ? (
          <div className="p-6 space-y-6">
            <div className="text-center py-4 space-y-3">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-100 font-display">
                {t.booking.confirmedTitle}
              </h3>
              <p className="text-sm text-neutral-400 max-w-md mx-auto">
                {t.booking.reference}: <strong className="text-neutral-100 font-mono">{confirmedBooking.id}</strong>.
                {confirmedBooking.clientName}
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="rounded-xl p-5 bg-neutral-950 border border-neutral-800 space-y-3 font-mono text-xs">
              <div className="flex justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                <span>Service</span>
                <span className="text-neutral-200 font-medium">{confirmedBooking.serviceName}</span>
              </div>
              <div className="flex justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                <span>Date & Time</span>
                <span className="text-amber-400 font-medium">
                  {confirmedBooking.date} at {confirmedBooking.timeSlot}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                <span>Location</span>
                <span className="text-neutral-200 text-right">
                  {confirmedBooking.locationType === 'house_call'
                    ? `${confirmedBooking.chicagoAddress} (${confirmedBooking.chicagoNeighborhood})`
                    : 'Studio / Chair (Chicago)'}
                </span>
              </div>
              <div className="flex justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                <span>Service Rate</span>
                <span className="text-neutral-200">${confirmedBooking.servicePrice}</span>
              </div>
              {confirmedBooking.travelFee > 0 && (
                <div className="flex justify-between text-neutral-400 pb-2 border-b border-neutral-800">
                  <span>Chicago Mobile Travel Fee</span>
                  <span className="text-amber-400 font-semibold">+${confirmedBooking.travelFee}</span>
                </div>
              )}
              <div className="flex justify-between text-sm pt-1 text-neutral-100 font-bold">
                <span>Total Amount</span>
                <span className="text-amber-400 font-mono">${confirmedBooking.totalPrice}</span>
              </div>
            </div>

            {/* If House Call: Prominent Cash App Deposit Banner */}
            {confirmedBooking.locationType === 'house_call' && (
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 space-y-3">
                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div className="text-xs text-neutral-200 space-y-1">
                    <div className="font-semibold text-amber-300 text-sm">
                      Security Deposit Required for Chicago House Call
                    </div>
                    <div>
                      Please send your <strong className="text-amber-200 font-mono">$20 deposit</strong> via Cash App to{' '}
                      <strong className="text-white font-mono">{BARBER_CONTACT.cashAppTag}</strong> with note:{' '}
                      <span className="font-mono text-neutral-300">"{confirmedBooking.id} - {confirmedBooking.clientName}"</span>.
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <button
                    onClick={handleCopyTag}
                    className="flex-1 py-2 px-3 bg-neutral-900 border border-neutral-700 hover:border-neutral-500 rounded-lg text-xs font-mono text-neutral-200 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    {copiedTag ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedTag ? 'Copied Tag!' : `Copy ${BARBER_CONTACT.cashAppTag}`}</span>
                  </button>

                  <a
                    href={BARBER_CONTACT.cashAppUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2 px-4 bg-emerald-500 hover:bg-emerald-400 text-emerald-950 font-semibold rounded-lg text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <span>Open Cash App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* Direct Contact & Calendar Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={() => handleDownloadCalendar(confirmedBooking)}
                className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 border border-neutral-700 transition-colors cursor-pointer"
              >
                <CalendarIcon className="w-4 h-4 text-amber-400" />
                <span>{t.booking.saveCalendar}</span>
              </button>

              <a
                href={`tel:${BARBER_CONTACT.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold flex items-center justify-center gap-2 border border-neutral-700 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{t.booking.callText}: (312) 385-9229</span>
              </a>
            </div>

            <div className="pt-2 text-center">
              <button
                onClick={onClose}
                className="text-xs text-neutral-400 hover:text-neutral-200 underline cursor-pointer"
              >
                {t.booking.doneClose}
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Flow */
          <div className="p-6 space-y-6">
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between text-xs font-mono text-neutral-400 border-b border-neutral-800 pb-3">
              <span className={step >= 1 ? 'text-amber-400 font-semibold' : ''}>{t.booking.step1}</span>
              <span>·</span>
              <span className={step >= 2 ? 'text-amber-400 font-semibold' : ''}>{t.booking.step2}</span>
              <span>·</span>
              <span className={step >= 3 ? 'text-amber-400 font-semibold' : ''}>{t.booking.step3}</span>
              <span>·</span>
              <span className={step >= 4 ? 'text-amber-400 font-semibold' : ''}>{t.booking.step4}</span>
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3 rounded-lg bg-red-950/60 border border-red-800/80 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* STEP 1: SERVICE */}
            {step === 1 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 font-display">
                    {t.booking.selectServiceTitle}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {t.booking.serviceDesc}
                  </p>
                </div>

                <div className="space-y-3">
                  {SERVICES.map((service) => {
                    const isSelected = selectedServiceId === service.id;
                    const name =
                      service.id === 'haircut'
                        ? t.services.haircutName
                        : service.id === 'beard'
                        ? t.services.beardName
                        : t.services.comboName;
                    const desc =
                      service.id === 'haircut'
                        ? t.services.haircutDesc
                        : service.id === 'beard'
                        ? t.services.beardDesc
                        : t.services.comboDesc;

                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedServiceId(service.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-neutral-800/90 border-amber-400 shadow-md ring-1 ring-amber-400/30'
                            : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-semibold text-neutral-100 flex items-center gap-2">
                            <span>{name}</span>
                            {service.popular && (
                              <span className="text-[11px] font-mono text-amber-400">Popular</span>
                            )}
                          </div>
                          <div className="text-xs text-neutral-400">{desc}</div>
                        </div>

                        <div className="text-right shrink-0 ml-4">
                          <div className="text-lg font-bold font-mono text-neutral-100 tabular-nums">
                            ${service.price}
                          </div>
                          <div className="text-[11px] text-neutral-500 font-mono">
                            {service.durationMinutes} min
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2: LOCATION */}
            {step === 2 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 font-display">
                    {t.booking.locationTitle}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {t.booking.locationDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setLocationType('in_studio')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      locationType === 'in_studio'
                        ? 'bg-neutral-800/90 border-amber-400 ring-1 ring-amber-400/30'
                        : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-neutral-800 flex items-center justify-center mb-2">
                      <Scissors className="w-4 h-4 text-neutral-200" />
                    </div>
                    <div className="font-semibold text-sm text-neutral-100">{t.booking.inStudio}</div>
                    <div className="text-xs text-neutral-400 mt-1">{t.booking.inStudioDesc}</div>
                    <div className="text-xs font-mono text-neutral-300 mt-3 font-semibold">$0 Travel Fee</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setLocationType('house_call')}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      locationType === 'house_call'
                        ? 'bg-neutral-800/90 border-amber-400 ring-1 ring-amber-400/30'
                        : 'bg-neutral-950/60 border-neutral-800 hover:border-neutral-700'
                    }`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center mb-2">
                      <MapPin className="w-4 h-4 text-amber-400" />
                    </div>
                    <div className="font-semibold text-sm text-neutral-100">{t.booking.houseCall}</div>
                    <div className="text-xs text-neutral-400 mt-1">{t.booking.houseCallDesc}</div>
                    <div className="text-xs font-mono text-amber-400 mt-3 font-semibold">
                      +$20 Travel Fee (Instant Deposit)
                    </div>
                  </button>
                </div>

                {locationType === 'house_call' && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3 pt-4">
                    <div className="text-xs font-semibold text-amber-400 uppercase font-mono">
                      {t.booking.neighborhoodLabel}
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1">
                        {t.booking.streetAddressLabel}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 340 N Peoria St, Apt 4B, Chicago, IL"
                        value={chicagoAddress}
                        onChange={(e) => setChicagoAddress(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-300 mb-1">
                        {t.booking.neighborhoodLabel}
                      </label>
                      <select
                        value={chicagoNeighborhood}
                        onChange={(e) => setChicagoNeighborhood(e.target.value)}
                        className="w-full px-3 py-2 text-sm bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                      >
                        {CHICAGO_NEIGHBORHOODS.map((n) => (
                          <option key={n.name} value={n.name}>
                            {n.name} ({n.region})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="p-3 rounded-lg bg-neutral-900/90 border border-amber-500/30 text-xs text-neutral-300 space-y-1">
                      <div className="font-semibold text-amber-400 flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5" />
                        <span>{t.booking.depositNotice}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* STEP 3: DATE & TIME */}
            {step === 3 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 font-display">
                    {t.booking.dateTimeTitle}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {t.booking.dateTimeDesc}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="text-xs font-mono text-neutral-400">Upcoming Dates</div>
                  <div className="grid grid-cols-4 sm:grid-cols-7 gap-2">
                    {availableDates.slice(0, 7).map((d) => {
                      const isSelected = selectedDate === d.isoString;
                      return (
                        <button
                          key={d.isoString}
                          type="button"
                          onClick={() => setSelectedDate(d.isoString)}
                          className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-md'
                              : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <div className="text-[11px] uppercase tracking-wide opacity-80">
                            {d.displayDay}
                          </div>
                          <div className="text-sm font-mono mt-0.5">{d.displayDate}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-xs font-mono text-neutral-400">Available Time Slots</div>
                  <div className="grid grid-cols-3 gap-2">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`py-2.5 px-3 rounded-xl border text-center font-mono text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-amber-400 text-neutral-950 border-amber-400 font-bold shadow-sm'
                              : 'bg-neutral-950/60 border-neutral-800 text-neutral-300 hover:border-neutral-700'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 inline mr-1 opacity-70" />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CLIENT DETAILS */}
            {step === 4 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-neutral-100 font-display">
                    {t.booking.detailsTitle}
                  </h3>
                  <p className="text-xs text-neutral-400">
                    {t.booking.detailsDesc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-between text-xs font-mono">
                  <div>
                    <span className="text-neutral-400">Booking: </span>
                    <span className="text-neutral-200 font-semibold">{currentService.name}</span>
                    <span className="text-neutral-500"> ({selectedTimeSlot}, {selectedDate})</span>
                  </div>
                  <div className="text-amber-400 font-bold text-sm">
                    ${totalPrice}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-neutral-300 mb-1">{t.booking.fullName}</label>
                    <input
                      type="text"
                      placeholder="e.g. John Miller"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-neutral-300 mb-1">{t.booking.phone}</label>
                    <input
                      type="tel"
                      placeholder="+1 (312) 000-0000"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">{t.booking.email}</label>
                  <input
                    type="email"
                    placeholder="yourname@gmail.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-neutral-300 mb-1">
                    {t.booking.notes}
                  </label>
                  <input
                    type="text"
                    placeholder="e.g., Straight European hair, taper fade on sides, textured scissor top"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-neutral-950 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                {locationType === 'house_call' && (
                  <div className="p-4 rounded-xl bg-neutral-950 border border-amber-500/30 space-y-3">
                    <div className="text-xs text-neutral-300">
                      <strong className="text-amber-400">Cash App Security Deposit:</strong> Send ${BARBER_CONTACT.houseCallFee} to{' '}
                      <span className="font-mono text-white font-bold">{BARBER_CONTACT.cashAppTag}</span>.
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-400 mb-1">
                        {t.booking.cashAppHandle}
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. $JohnChicago"
                        value={cashAppHandle}
                        onChange={(e) => setCashAppHandle(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-100 focus:outline-none focus:border-amber-400 font-mono"
                      />
                    </div>

                    <label className="flex items-center gap-2 text-xs text-neutral-300 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        checked={hasSentDeposit}
                        onChange={(e) => setHasSentDeposit(e.target.checked)}
                        className="rounded border-neutral-700 text-amber-500 focus:ring-amber-400"
                      />
                      <span>{t.booking.depositAgreement}</span>
                    </label>
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2.5 rounded-xl border border-neutral-700 hover:bg-neutral-800 text-xs font-semibold text-neutral-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>{t.booking.back}</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-md transition-all cursor-pointer active:scale-95"
              >
                <span>{step === 4 ? `${t.booking.confirmBooking} ($${totalPrice})` : t.booking.continue}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
