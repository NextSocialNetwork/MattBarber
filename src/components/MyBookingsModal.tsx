import React from 'react';
import { X, Calendar, Clock, MapPin, AlertCircle, Phone, Trash2, CheckCircle2 } from 'lucide-react';
import { Appointment } from '../types';
import { BARBER_CONTACT } from '../data/barberData';

interface MyBookingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Appointment[];
  onCancelBooking: (id: string) => void;
}

export const MyBookingsModal: React.FC<MyBookingsModalProps> = ({
  isOpen,
  onClose,
  bookings,
  onCancelBooking,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-neutral-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-6">
        {/* Header */}
        <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-neutral-950/60">
          <div>
            <div className="text-xs font-mono text-amber-400">Scheduled Appointments</div>
            <h3 className="text-lg font-bold text-neutral-100 font-display">My Bookings</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
          {bookings.length === 0 ? (
            <div className="text-center py-10 text-neutral-400 space-y-2">
              <Calendar className="w-10 h-10 mx-auto text-neutral-600" />
              <p className="text-sm">No scheduled appointments found on this device.</p>
              <p className="text-xs text-neutral-500">
                Book a service online or call Matt at {BARBER_CONTACT.phone}.
              </p>
            </div>
          ) : (
            bookings.map((booking) => (
              <div
                key={booking.id}
                className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-neutral-800 text-amber-400 font-semibold">
                      {booking.id}
                    </span>
                    <span className="text-sm font-bold text-neutral-100 font-display">
                      {booking.serviceName}
                    </span>
                  </div>

                  <div className="text-sm font-mono font-bold text-amber-400">
                    ${booking.totalPrice}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{booking.timeSlot}</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:col-span-2">
                    <MapPin className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                    <span className="truncate">
                      {booking.locationType === 'house_call'
                        ? `House Call: ${booking.chicagoAddress} (${booking.chicagoNeighborhood})`
                        : 'In-Studio / Chair (Chicago)'}
                    </span>
                  </div>
                </div>

                {/* House Call Deposit notice */}
                {booking.locationType === 'house_call' && (
                  <div className="text-[11px] p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-between text-neutral-300">
                    <div className="flex items-center gap-1.5">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>$20 Travel Deposit via Cash App: {BARBER_CONTACT.cashAppTag}</span>
                    </div>
                    <a
                      href={BARBER_CONTACT.cashAppUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:underline font-mono"
                    >
                      Pay Now
                    </a>
                  </div>
                )}

                {/* Footer Actions */}
                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                  <a
                    href={`tel:${BARBER_CONTACT.phoneRaw}`}
                    className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-white"
                  >
                    <Phone className="w-3 h-3 text-amber-400" />
                    <span>Call Matt</span>
                  </a>

                  <button
                    onClick={() => onCancelBooking(booking.id)}
                    className="inline-flex items-center gap-1 text-xs text-red-400 hover:text-red-300 hover:underline cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Cancel Appointment</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-4 bg-neutral-950 border-t border-neutral-800 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
