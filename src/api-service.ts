// api-service.ts

import { Doctor, Patient, Appointment, Surgery, Task, OperationTheatre } from './interfaces';

class ApiService {
  // Example API endpoints
  private doctorsApiUrl = '/api/doctors';
  private patientsApiUrl = '/api/patients';
  private appointmentsApiUrl = '/api/appointments';
  private surgeriesApiUrl = '/api/surgeries';
  private tasksApiUrl = '/api/tasks';
  private operationTheatresApiUrl = '/api/operation-theatres';

  async fetchDoctors(): Promise<Doctor[]> {
    try {
      const response = await fetch(this.doctorsApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch doctors.');
      }
      const data = await response.json();
      return data as Doctor[];
    } catch (error) {
      console.error('Error fetching doctors:', error);
      throw error;
    }
  }

  async fetchPatients(): Promise<Patient[]> {
    try {
      const response = await fetch(this.patientsApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch patients.');
      }
      const data = await response.json();
      return data as Patient[];
    } catch (error) {
      console.error('Error fetching patients:', error);
      throw error;
    }
  }

  async fetchAppointments(): Promise<Appointment[]> {
    try {
      const response = await fetch(this.appointmentsApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch appointments.');
      }
      const data = await response.json();
      return data as Appointment[];
    } catch (error) {
      console.error('Error fetching appointments:', error);
      throw error;
    }
  }

  async fetchSurgeries(): Promise<Surgery[]> {
    try {
      const response = await fetch(this.surgeriesApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch surgeries.');
      }
      const data = await response.json();
      return data as Surgery[];
    } catch (error) {
      console.error('Error fetching surgeries:', error);
      throw error;
    }
  }

  async fetchTasks(): Promise<Task[]> {
    try {
      const response = await fetch(this.tasksApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch tasks.');
      }
      const data = await response.json();
      return data as Task[];
    } catch (error) {
      console.error('Error fetching tasks:', error);
      throw error;
    }
  }

  async fetchOperationTheatres(): Promise<OperationTheatre[]> {
    try {
      const response = await fetch(this.operationTheatresApiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch operation theatres.');
      }
      const data = await response.json();
      return data as OperationTheatre[];
    } catch (error) {
      console.error('Error fetching operation theatres:', error);
      throw error;
    }
  }
}

export default ApiService;


