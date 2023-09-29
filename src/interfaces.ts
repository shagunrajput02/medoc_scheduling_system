// interfaces.ts

// Interface for a Person
export interface Person {
  id: number;
  name: string;
}

// Interface for a Doctor, extending Person
export interface Doctor extends Person {
  workingHours: { start: string; end: string };
  availableDays: string[];
}

// Interface for a Patient, extending Person
export interface Patient extends Person {}

// Interface for an Appointment
export interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  dateTime: string;
}

// Interface for a Surgery
export interface Surgery {
  id: number;
  patientId: number;
  doctorId: number;
  operationTheatreId: number;
  dateTime: string;
  details: string;
}

// Interface for a Task
export interface Task {
  id: number;
  description: string;
  dueDate: string;
  doctorId: number;
}

// Interface for an Operation Theatre
export interface OperationTheatre {
  id: number;
  name: string;
  availableSlots: string[];
}
