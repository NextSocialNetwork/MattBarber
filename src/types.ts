export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  description: string;
  highlights: string[];
  popular?: boolean;
}

export type LocationType = 'in_studio' | 'house_call';

export interface Appointment {
  id: string;
  serviceId: string;
  serviceName: string;
  servicePrice: number;
  locationType: LocationType;
  travelFee: number;
  totalPrice: number;
  date: string;
  timeSlot: string;
  clientName: string;
  clientPhone: string;
  clientEmail: string;
  chicagoAddress?: string;
  chicagoNeighborhood?: string;
  notes?: string;
  cashAppStatus: 'not_required' | 'deposit_pending' | 'deposit_verified';
  status: 'confirmed' | 'cancelled';
  createdAt: string;
}

export interface ChicagoNeighborhood {
  name: string;
  region: string;
  travelNote: string;
}
