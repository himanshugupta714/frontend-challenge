import { IconsType } from "assets/types";
import Card from "components/card";
import Input from "components/input";
import Typography from "components/typography";
import EmptyContainer from "../emptyContainer";
import { getIcons } from "assets";
import { useCallback } from "react";

interface UploadedDocumentsProps {
  selectedDocument: string[];
  setSelectedDocument?: React.Dispatch<React.SetStateAction<string[]>>;
}

const UploadedDocuments = ({
  selectedDocument,
  setSelectedDocument,
}: UploadedDocumentsProps) => {
  const handleDeleteDocument = useCallback(
    (document: string) => () => {
      setSelectedDocument &&
        setSelectedDocument((prev) => prev.filter((doc) => doc !== document));
    },
    [setSelectedDocument]
  );

  return (
    <Card className="flex-1 min-h-[60vh]">
      <Typography variant="base" weight="medium" className="mb-3">
        Selected Documents
      </Typography>
      <Input icon={IconsType.search} />

      {selectedDocument.length === 0 && <EmptyContainer />}

      {selectedDocument.length > 0 && (
        <div className="flex flex-col gap-4 mt-4 border border-solid border-green-500 rounded-lg p-2">
          {selectedDocument.map((document) => (
            <div key={document} className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                {getIcons(IconsType.tick)}
                <Typography variant="sm" weight="medium">
                  {document}
                </Typography>
              </span>
              <div onClick={handleDeleteDocument(document)}>
                {getIcons(IconsType.close)}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
};

export default UploadedDocuments;
