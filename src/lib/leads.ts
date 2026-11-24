import fs from 'fs';
import path from 'path';

export interface LeadSubmission {
  id: string;
  type: 'consultation' | 'quote' | 'contact';
  name: string;
  email: string;
  phone?: string;
  country?: string;
  situation?: string;
  selectedSlot?: string;
  yearsBehind?: string;
  foreignAccounts?: string;
  hasForeignCompany?: string;
  urgency?: string;
  notes?: string;
  status: 'new' | 'reviewed' | 'contacted';
  createdAt: string;
}

// In-memory fallback for serverless/edge environments
let inMemoryLeads: LeadSubmission[] = [
  {
    id: 'lead-1',
    type: 'consultation',
    name: 'Alexander Wright',
    email: 'a.wright@londontech.co.uk',
    phone: '+44 20 7946 0912',
    country: 'United Kingdom',
    situation: 'accidental-americans',
    selectedSlot: '02:00 PM (Europe/London)',
    notes: 'Dual US/UK citizen, never filed US taxes since moving in 2014. Need Streamlined procedure.',
    status: 'new',
    createdAt: new Date(Date.now() - 3600000 * 4).toISOString()
  },
  {
    id: 'lead-2',
    type: 'quote',
    name: 'Elena Rostova',
    email: 'elena.rostova@genevawealth.ch',
    phone: '+41 22 555 0199',
    country: 'Switzerland',
    yearsBehind: '0',
    foreignAccounts: 'over_50k',
    hasForeignCompany: 'yes',
    urgency: 'high',
    notes: 'Swiss Pillar 2 & 3a pensions plus shares in Swiss SARL corporate entity.',
    status: 'reviewed',
    createdAt: new Date(Date.now() - 3600000 * 18).toISOString()
  }
];

const LEADS_FILE_PATH = path.join(process.cwd(), 'leads-data.json');

function loadLeadsFromFile(): LeadSubmission[] {
  try {
    if (fs.existsSync(LEADS_FILE_PATH)) {
      const data = fs.readFileSync(LEADS_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    // fallback to memory
  }
  return inMemoryLeads;
}

function saveLeadsToFile(leads: LeadSubmission[]) {
  try {
    fs.writeFileSync(LEADS_FILE_PATH, JSON.stringify(leads, null, 2), 'utf-8');
  } catch (err) {
    // read-only file systems fallback gracefully
  }
}

export function getAllLeads(): LeadSubmission[] {
  const fileLeads = loadLeadsFromFile();
  if (fileLeads && fileLeads.length > 0) {
    return fileLeads;
  }
  return inMemoryLeads;
}

export function addLead(data: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): LeadSubmission {
  const newLead: LeadSubmission = {
    ...data,
    id: `lead-${Date.now()}`,
    status: 'new',
    createdAt: new Date().toISOString()
  };

  const current = getAllLeads();
  const updated = [newLead, ...current];
  inMemoryLeads = updated;
  saveLeadsToFile(updated);

  return newLead;
}
