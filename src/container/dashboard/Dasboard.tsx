import { memo, useState } from "react";

import Card from "components/card";
import Typography from "components/typography";

import DocumentSelector from "./components/documentSelector";
import UploadedDocuments from "./components/uploadedDocuments";

const Dashboard = (): JSX.Element => {
  const [selectedDocument, setSelectedDocument] = useState<string[]>([]);

  return (
    <div>
      <div className="max-w-[1024px] m-auto mt-6 gap-6">
        <Card className="flex flex-col items-start gap-4">
          <div className="text-lg text-gray-900 font-semibold">
            Which agreements, forms and notices should be sent to Jason Smith?
          </div>
          <div className="text-sm text-gray-900 font-medium ">
            Employees assigned to this job type will be required to review,
            where relevant fill-in, and sign the following agreements and
            notices:
          </div>
        </Card>
        <div className="mt-6">
          <Typography weight="medium" variant="sm">
            Select the agreements, notices and documents you want Jason Smith to
            sign
          </Typography>
          <div className="flex items-start justify-start gap-6 mt-2">
            <DocumentSelector
              selectedDocument={selectedDocument}
              setSelectedDocument={setSelectedDocument}
            />
            <UploadedDocuments
              setSelectedDocument={setSelectedDocument}
              selectedDocument={selectedDocument}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
