// Define interfaces to represent different entities
interface Person {
  id: number;
  name: string;
}

interface Doctor extends Person {
  workingHours: { start: string; end: string };
  availableDays: string[];
}

interface Patient extends Person {}

interface Appointment {
  id: number;
  patientId: number;
  doctorId: number;
  dateTime: string;
}

interface Surgery {
  id: number;
  patientId: number;
  doctorId: number;
  operationTheatreId: number;
  dateTime: string;
  details: string;
}

interface Task {
  id: number;
  description: string;
  dueDate: string;
  doctorId: number;
}

interface OperationTheatre {
  id: number;
  name: string;
  availableSlots: string[];
}

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
}

// Example Usage

const scheduler = new HospitalScheduler();

// Register doctors
scheduler.registerDoctor({
  id: 1,
  name: 'Dr. Alia',
  workingHours: { start: '09:00', end: '17:00' },
  availableDays: ['Monday', 'Wednesday', 'Friday'],
});
scheduler.registerDoctor({
  id: 2,
  name: 'Dr. Ranveer',
  workingHours: { start: '08:00', end: '16:00' },
  availableDays: ['Tuesday', 'Thursday'],
});

// Register patients
scheduler.registerPatient({ id: 1, name: 'Karan' });
scheduler.registerPatient({ id: 2, name: 'Karishma' });

// Set doctor availability
scheduler.setDoctorAvailability(1, { start: '09:00', end: '17:00' }, ['Monday', 'Wednesday']);
scheduler.setDoctorAvailability(2, { start: '08:00', end: '16:00' }, ['Tuesday', 'Thursday']);

// Schedule appointment
scheduler.scheduleAppointment({
  id: 1,
  patientId: 1,
  doctorId: 1,
  dateTime: '2023-08-15 10:00',
});

// Display scheduled appointments
scheduler.displayAppointments();

