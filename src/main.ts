// main.ts
import HospitalScheduler from './classes';
import ApiService from './api-service';
import { Doctor, Patient, Appointment, Surgery, Task, OperationTheatre } from './interfaces';

// Create instances of ApiService and HospitalScheduler
const apiService = new ApiService();
const scheduler = new HospitalScheduler();

// Initialize data from the API
async function initializeData() {
  try {
    // Fetch data for doctors, patients, appointments, surgeries, tasks, and operation theatres
    const doctors: Doctor[] = await apiService.fetchDoctors();
    const patients: Patient[] = await apiService.fetchPatients();
    const appointments: Appointment[] = await apiService.fetchAppointments();
    const surgeries: Surgery[] = await apiService.fetchSurgeries();
    const tasks: Task[] = await apiService.fetchTasks();
    const operationTheatres: OperationTheatre[] = await apiService.fetchOperationTheatres();

    // Register doctors and patients
    doctors.forEach((doctor) => scheduler.registerDoctor(doctor));
    patients.forEach((patient) => scheduler.registerPatient(patient));

    // Schedule appointments and surgeries
    appointments.forEach((appointment) => scheduler.scheduleAppointment(appointment));
    surgeries.forEach((surgery) => scheduler.scheduleSurgery(surgery));

    // Assign tasks
    tasks.forEach((task) => scheduler.assignTask(task));

    // Set doctor availability and operation theatre availability
    doctors.forEach((doctor) =>
      scheduler.setDoctorAvailability(doctor.id, doctor.workingHours, doctor.availableDays)
    );
    operationTheatres.forEach((theatre) =>
      scheduler.setOperationTheatreAvailability(theatre.id, theatre.availableSlots)
    );

    // Display scheduled appointments
    scheduler.displayAppointments();

    // Additional operations as needed
  } catch (error) {
    console.error('Error initializing data:', error);
  }
}

// Initialize data and perform scheduling operations
initializeData().then(() => {
  // You can add more operations here or start your application logic
});
