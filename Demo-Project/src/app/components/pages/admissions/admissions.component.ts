import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admissions',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './admissions.component.html',
  styleUrl: './admissions.component.scss'
})
export class AdmissionsComponent {
  admissionSteps = [
    {
      id: 1,
      title: 'Application Submission',
      desc: 'Submit the online application form from our website or collect the physical form from the admission office. The application window is open from April 1st to June 15th annually.'
    },
    {
      id: 2,
      title: 'Entrance Test / Interview',
      desc: 'Appear for the entrance examination (for selected programs) or personal interview as per the scheduled date communicated via email/SMS.'
    },
    {
      id: 3,
      title: 'Document Verification',
      desc: 'Shortlisted candidates must submit original documents for verification to the administration office within 7 days of selection.'
    },
    {
      id: 4,
      title: 'Fee Payment',
      desc: 'Complete the admission by paying the first installment of fees through online banking, demand draft, or cash at the college fee counter.'
    },
    {
      id: 5,
      title: 'Orientation Program',
      desc: 'Attend the mandatory orientation session one week before classes commence to complete the admission process.'
    }
  ];

  requiredDocuments = [
    'Completed application form with passport photo',
    'Transfer Certificate (TC) from previous institution',
    'Mark sheets of qualifying examination (Original + 3 copies)',
    'Conduct Certificate from previous school/college',
    'Aadhaar Card (Photocopy)',
    'Caste Certificate (if applicable)',
    'Migration Certificate (for other board students)',
    'Passport size photographs (5 copies)'
  ];
}
