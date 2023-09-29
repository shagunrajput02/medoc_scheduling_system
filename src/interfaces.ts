// Export and define interfaces to represent different entities
export interface Person {
  id: number;
  name: string;
}

export interface Doctor extends Person {
  workingHours: { start: string; end: string };
  availableDays: string[];
}

export interface Patient extends Person {}

export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  dateTime: string;
}

export interface Surgery {
  id: number;
  patientId: number;
  doctorId: number;
  operationTheatreId: number;
  dateTime: string;
  details: string;
}

export interface Task {
  id: number;
  description: string;
  dueDate: string;
  doctorId: number;
}

export interface OperationTheatre {
  id: number;
  name: string;
  availableSlots: string[];
}
