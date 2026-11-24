import React from 'react';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { 
  FileCheck, 
  Upload, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  LogOut, 
  UserCheck, 
  AlertTriangle,
  Download,
  FolderOpen,
  Inbox,
  Mail,
  Phone,
  Globe,
  DollarSign,
  CheckCircle2,
  Tag
} from 'lucide-react';
import Link from 'next/link';
import { getAllLeads } from '@/lib/leads';

export default async function PortalPage() {
  const session = await getSession();

  if (!session) {
    redirect('/login');
  }

  const leads = getAllLeads();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Top Banner / Welcome */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{session.role === 'cpa' ? 'CPA Administrator Console' : 'Active Client Engagement'}</span>
            </span>
            <span className="text-xs text-slate-400">ID: {session.portalId || 'EXP-9021'}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Welcome back, {session.name}
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Tax Year 2025 Expat Return Preparation &bull; Assigned Advisor:{' '}
            <strong className="text-slate-700">{session.assignedCpa || 'Marcus Vance, CPA'}</strong>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/book-consultation"
            className="text-xs font-bold text-sky-700 hover:text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-4 py-2 rounded-lg transition"
          >
            Test New Booking
          </Link>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-rose-600 bg-slate-50 hover:bg-rose-50 border border-slate-200 px-4 py-2 rounded-lg transition"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </form>
        </div>
      </div>

      {/* ADMIN / INCOMING LEADS INBOX SECTION */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
              <Inbox className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-slate-900">
                  Client Inquiries &amp; Form Submissions
                </h2>
                <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  {leads.length} Received
                </span>
              </div>
              <p className="text-xs text-slate-500">
                All inquiries submitted via &ldquo;Book Consultation&rdquo; and &ldquo;Request Quote&rdquo; forms appear here automatically.
              </p>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Real-time API Store: <code className="bg-slate-100 px-2 py-0.5 rounded font-mono text-[11px]">/api/leads</code>
          </div>
        </div>

        {/* Leads Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider font-bold">
                <th className="pb-3 pr-4">Type</th>
                <th className="pb-3 px-4">Client Name &amp; Contact</th>
                <th className="pb-3 px-4">Jurisdiction</th>
                <th className="pb-3 px-4">Details / Selected Slot</th>
                <th className="pb-3 px-4">Submitted At</th>
                <th className="pb-3 pl-4 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-slate-50/80 transition">
                  <td className="py-3.5 pr-4 align-top">
                    <span className={`inline-flex items-center gap-1 font-bold px-2 py-0.5 rounded-md text-[10px] uppercase tracking-wide ${
                      lead.type === 'consultation' 
                        ? 'bg-sky-100 text-sky-800 border border-sky-200' 
                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                    }`}>
                      {lead.type === 'consultation' ? <Calendar className="w-3 h-3" /> : <DollarSign className="w-3 h-3" />}
                      <span>{lead.type}</span>
                    </span>
                  </td>

                  <td className="py-3.5 px-4 align-top">
                    <div className="font-bold text-slate-900">{lead.name}</div>
                    <div className="text-slate-500 flex items-center gap-1.5 mt-0.5 text-[11px]">
                      <Mail className="w-3 h-3 text-slate-400" />
                      <a href={`mailto:${lead.email}`} className="text-sky-600 hover:underline">{lead.email}</a>
                    </div>
                    {lead.phone && (
                      <div className="text-slate-500 flex items-center gap-1.5 mt-0.5 text-[11px]">
                        <Phone className="w-3 h-3 text-slate-400" />
                        <span>{lead.phone}</span>
                      </div>
                    )}
                  </td>

                  <td className="py-3.5 px-4 align-top">
                    <div className="font-semibold text-slate-800 flex items-center gap-1">
                      <Globe className="w-3 h-3 text-slate-400" />
                      <span>{lead.country || 'Global'}</span>
                    </div>
                    {lead.situation && (
                      <div className="text-[11px] text-slate-500 mt-0.5">{lead.situation}</div>
                    )}
                  </td>

                  <td className="py-3.5 px-4 align-top max-w-xs">
                    {lead.selectedSlot && (
                      <div className="text-slate-700 font-medium text-[11px]">
                        <strong>Slot:</strong> {lead.selectedSlot}
                      </div>
                    )}
                    {lead.yearsBehind && (
                      <div className="text-slate-700 text-[11px]">
                        <strong>Delinquency:</strong> {lead.yearsBehind === '0' ? 'Current Year' : `${lead.yearsBehind} Years Behind`}
                      </div>
                    )}
                    {lead.notes && (
                      <p className="text-[11px] text-slate-500 italic mt-0.5 line-clamp-2">
                        &ldquo;{lead.notes}&rdquo;
                      </p>
                    )}
                  </td>

                  <td className="py-3.5 px-4 align-top whitespace-nowrap text-slate-500 text-[11px]">
                    {new Date(lead.createdAt).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>

                  <td className="py-3.5 pl-4 align-top text-right">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      lead.status === 'new'
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}>
                      {lead.status === 'new' ? 'New Lead' : 'Reviewed'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 4-Stage Return Progress Tracker */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">
          2025 Filing Status &amp; Milestones
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl border-2 border-emerald-500 bg-emerald-50/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-700">Stage 1: Completed</span>
              <FileCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-bold text-slate-900 text-sm mt-2">Client Tax Questionnaire</div>
            <div className="text-xs text-slate-600 mt-1">Completed on Nov 12, 2026</div>
          </div>

          <div className="p-4 rounded-xl border-2 border-sky-500 bg-sky-50/50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-sky-700">Stage 2: In Review</span>
              <Clock className="w-4 h-4 text-sky-600 animate-spin" />
            </div>
            <div className="font-bold text-slate-900 text-sm mt-2">Document Verification &amp; FBAR</div>
            <div className="text-xs text-slate-600 mt-1">Advisor reviewing foreign bank accounts</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Stage 3: Pending</span>
              <FileCheck className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-bold text-slate-700 text-sm mt-2">Form 1040 Expat Draft</div>
            <div className="text-xs text-slate-400 mt-1">FEIE Form 2555 vs FTC optimization</div>
          </div>

          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Stage 4: Final</span>
              <Calendar className="w-4 h-4 text-slate-400" />
            </div>
            <div className="font-bold text-slate-700 text-sm mt-2">E-File Submission &amp; Receipt</div>
            <div className="text-xs text-slate-400 mt-1">IRS &amp; FinCEN automated transmission</div>
          </div>
        </div>
      </div>

      {/* Grid: Document Checklist & Active Action Items */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Document Checklist */}
        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-4">
            <div>
              <h3 className="font-bold text-base text-slate-900">Required Tax Documents</h3>
              <p className="text-xs text-slate-500">Upload your foreign slips and bank account summaries</p>
            </div>
            <button className="flex items-center gap-1.5 text-xs font-bold bg-sky-600 text-white px-3 py-1.5 rounded-lg hover:bg-sky-700 transition">
              <Upload className="w-3.5 h-3.5" />
              <span>Upload Document</span>
            </button>
          </div>

          <div className="divide-y divide-slate-100">
            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Foreign Wage Slip (e.g. UK P60 / T4)</div>
                  <div className="text-[11px] text-slate-500">P60_2025_Jenkins.pdf &bull; Verified</div>
                </div>
              </div>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Received</span>
            </div>

            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileCheck className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Foreign Bank Account Statements (FBAR)</div>
                  <div className="text-[11px] text-slate-500">HSBC_UK_Accounts_Dec2025.pdf &bull; 3 Accounts</div>
                </div>
              </div>
              <span className="text-xs text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Received</span>
            </div>

            <div className="py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="text-xs font-bold text-slate-900">Foreign Pension Statement (SIPP / ISA / Super)</div>
                  <div className="text-[11px] text-slate-500">Awaiting annual valuation statement</div>
                </div>
              </div>
              <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">Requested</span>
            </div>
          </div>
        </div>

        {/* Assigned Advisor & Next Deadlines */}
        <div className="space-y-6">
          
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-bold text-sm text-slate-900 uppercase tracking-wider">Your Assigned Advisor</h3>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80"
                alt="Marcus Vance, CPA"
                className="w-13 h-13 rounded-full object-cover border-2 border-sky-600 shadow-sm"
              />
              <div>
                <div className="font-bold text-sm text-slate-900">{session.assignedCpa || 'Marcus Vance, CPA'}</div>
                <div className="text-xs text-slate-500">Senior Cross-Border Tax Lead</div>
                <div className="text-[11px] text-emerald-600 font-medium">Licensed in NY &amp; London desk</div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-100 flex gap-2">
              <Link 
                href="/book-consultation" 
                className="w-full text-center text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 py-2 rounded-lg transition"
              >
                Schedule Check-in Call
              </Link>
            </div>
          </div>

          <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider">
              <Calendar className="w-4 h-4" />
              <span>Upcoming Key Expat Date</span>
            </div>
            <div className="text-lg font-bold">June 15, 2026</div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Statutory automatic 2-month filing extension deadline for US citizens living outside the United States.
            </p>
            <Link 
              href="/deadlines" 
              className="text-xs text-sky-400 hover:underline block pt-1 font-semibold"
            >
              View Full Deadlines Schedule &rarr;
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
}
