import SpatialCard from '@/components/ui/SpatialCard';
import LineDraw from '@/components/ui/LineDraw';
import { FileText, Download } from 'lucide-react';
import { schoolInfo } from '@/data/schoolData';

export default function MandatoryDisclosurePage() {
  const documents = [
    { title: 'CBSE Affiliation Grant Letter', code: schoolInfo.affiliationNo },
    { title: 'Societies Registration Certificate', code: 'Sree Narayana Trust' },
    { title: 'No Objection Certificate (NOC)', code: 'Govt. of Kerala' },
    { title: 'Building Safety Certificate', code: 'PWD Kerala' },
    { title: 'Fire Safety Certificate', code: 'Fire & Rescue Dept' },
    { title: 'Water & Sanitation Certificate', code: 'Health Department' },
  ];

  return (
    <div className="page-container">
      <div className="page-inner">
        
        <div className="page-hero">
          <span className="page-hero-tag bg-[#C9982E]/10 border border-[#C9982E]/20 text-[#C9982E]">
            CBSE Public Information
          </span>
          <h1>Mandatory Disclosure</h1>
          <p>
            CBSE Affiliation No. {schoolInfo.affiliationNo} | School Code: {schoolInfo.schoolCode}
          </p>
          <LineDraw className="mt-4 max-w-lg mx-auto" />
        </div>

        <div className="section-gap">
          {documents.map((doc, idx) => (
            <SpatialCard key={idx} glowColor="gold" className="p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <FileText className="w-6 h-6 text-[#C9982E]" />
                  <div>
                    <h4 className="text-base font-bold text-[#1A1A1A]">{doc.title}</h4>
                    <span className="text-xs text-[#7A7A7A]">{doc.code}</span>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#C9982E]/10 hover:bg-[#C9982E]/20 text-[#C9982E] border border-[#C9982E]/20 rounded-xl text-xs font-bold transition flex items-center gap-2 whitespace-nowrap w-full sm:w-auto justify-center">
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </SpatialCard>
          ))}
        </div>

      </div>
    </div>
  );
}
