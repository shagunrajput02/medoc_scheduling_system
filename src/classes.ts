class HospitalScheduler {
  private apiService: ApiService;
  private doctors: Doctor[] = [];
  private patients: Patient[] = [];
  // Initialize other data entities similarly

  constructor(apiService: ApiService) {
    this.apiService = apiService;
  }

  async initializeDataFromAPI() {
    this.doctors = await this.apiService.fetchDoctors();
    this.patients = await this.apiService.fetchPatients();
    // Initialize other data entities from the API
  }

  // Doctor Registration
  registerDoctor(doctorData: Doctor) {
    // Check if the doctor already exists
    const existingDoctor = this.doctors.find((doc) => doc.id === doctorData.id);
    if (!existingDoctor) {
      this.doctors.push(doctorData);
    }
  }

  // Patient Registration
  registerPatient(patientData: Patient) {
    // Check if the patient already exists
    const existingPatient = this.patients.find((patient) => patient.id === patientData.id);
    if (!existingPatient) {
      this.patients.push(patientData);
    }
  }

  // Modify other methods to work with API data
}

