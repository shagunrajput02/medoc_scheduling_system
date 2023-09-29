// classes.ts
import { Doctor, Patient, Appointment, Surgery, Task, OperationTheatre } from './interfaces';

class HospitalScheduler {
  private doctors: Doctor[] = [];
  private patients: Patient[] = [];
  private appointments: Appointment[] = [];
  private surgeries: Surgery[] = [];
  private tasks: Task[] = [];
  private operationTheatres: OperationTheatre[] = [];

  // Doctor Registration
  registerDoctor(doctor: Doctor) {
    this.doctors.push(doctor);
  }

  // Patient Registration
  registerPatient(patient: Patient) {
    this.patients.push(patient);
  }

  // Schedule Appointment
  scheduleAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
  }

  // Schedule Surgery
  scheduleSurgery(surgery: Surgery) {
    this.surgeries.push(surgery);
  }

  // Assign Task
  assignTask(task: Task) {
    this.tasks.push(task);
  }

  // Define Doctor Availability
  setDoctorAvailability(doctorId: number, workingHours: { start: string; end: string }, availableDays: string[]) {
    const doctor = this.doctors.find((doc) => doc.id === doctorId);
    if (doctor) {
      doctor.workingHours = workingHours;
      doctor.availableDays = availableDays;
    }
  }

  // Define Operation Theatre Availability
  setOperationTheatreAvailability(operationTheatreId: number, availableSlots: string[]) {
    const operationTheatre = this.operationTheatres.find((theatre) => theatre.id === operationTheatreId);
    if (operationTheatre) {
      operationTheatre.availableSlots = availableSlots;
    }
  }

  // Display Scheduled Appointments
  displayAppointments() {
    this.appointments.forEach((appointment) => {
      const patient = this.patients.find((p) => p.id === appointment.patientId);
      const doctor = this.doctors.find((d) => d.id === appointment.doctorId);
      console.log(
        `Appointment ID: ${appointment.id}, Patient: ${patient?.name}, Doctor: ${doctor?.name}, Date and Time: ${appointment.dateTime}`
      );
    });
  }

  // Other display methods for surgeries, tasks, etc.
    // Display Scheduled Surgeries
  displaySurgeries() {
    this.surgeries.forEach((surgery) => {
      const patient = this.patients.find((p) => p.id === surgery.patientId);
      const doctor = this.doctors.find((d) => d.id === surgery.doctorId);
      console.log(
        `Surgery ID: ${surgery.id}, Patient: ${patient?.name}, Doctor: ${doctor?.name}, Date and Time: ${surgery.dateTime}`
      );
      console.log(`Details: ${surgery.details}`);
    });
  }

  // Display Assigned Tasks
  displayTasks() {
    this.tasks.forEach((task) => {
      const doctor = this.doctors.find((d) => d.id === task.doctorId);
      console.log(`Task ID: ${task.id}, Description: ${task.description}`);
      console.log(`Due Date: ${task.dueDate}`);
      console.log(`Assigned to Doctor: ${doctor?.name}`);
    });
  }
}

export default HospitalScheduler;


