import { IconsType } from "assets/types";
import { Switch } from "@headlessui/react";
import Card from "components/card";
import Input from "components/input";
import SelectDropDown from "components/selectDropDown";
import Typography from "components/typography";
import { useState } from "react";
import {
  drugPolicyAgreement,
  equipmentAgreement,
  jobTemplatesOptions,
  locationDropdownOptions,
  nomCompleteAgreement,
  payrollHandbook,
  seniorityLevelOptions,
  subsidiaryOptions,
} from "../../constants/dashboard.constants";
import Accordion from "components/accordion";

interface IDocumentSelectorProps {
  selectedDocument: string[];
  setSelectedDocument: React.Dispatch<React.SetStateAction<string[]>>;
}

const DocumentSelector = ({
  selectedDocument,
  setSelectedDocument,
}: IDocumentSelectorProps) => {
  const [enabled, setEnabled] = useState(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleSetItemClick = (item: string) => () => {
    const index = selectedDocument.indexOf(item);
    if (index > -1) {
      const newSelectedDocument = [...selectedDocument];
      newSelectedDocument.splice(index, 1);
      setSelectedDocument(newSelectedDocument);
    } else {
      setSelectedDocument([...selectedDocument, item]);
    }
  };

  return (
    <div className="flex-1">
      <Card>
        <div className="flex items-center w-full justify-between">
          <Typography variant="base" weight="medium">
            53 Available Documents
          </Typography>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${
              enabled ? "bg-green-400" : "bg-gray-200"
            } relative inline-flex h-6 w-11 items-center rounded-full`}
          >
            <span className="sr-only">Enable notifications</span>
            <span
              className={`${
                enabled ? "translate-x-6" : "translate-x-1"
              } inline-block h-4 w-4 transform rounded-full bg-white transition`}
            />
          </Switch>
        </div>

        <Input
          className="mt-3"
          placeholder="Search"
          value={searchValue}
          onChange={handleSearchValue}
          icon={IconsType.search}
        />

        <div className="mt-3 mb-5">
          <Typography variant="sm" weight="medium" className="mb-3">
            Filter by:
          </Typography>
          <div className="grid grid-cols-2 gap-3">
            <SelectDropDown
              placeholder="Job Templates"
              options={jobTemplatesOptions}
            />
            <SelectDropDown
              placeholder="Locations"
              options={locationDropdownOptions}
            />
            <SelectDropDown
              placeholder="Subsidiary"
              options={subsidiaryOptions}
            />
            <SelectDropDown
              placeholder="Seniority"
              options={seniorityLevelOptions}
            />
          </div>
        </div>

        <Typography variant="sm" weight="medium" className="mb-6">
          53 Available Documents
        </Typography>

        <div className="border border-solid border-orange-500 rounded-lg overflow-hidden">
          <Accordion
            selectedDocument={selectedDocument}
            handleItemClick={handleSetItemClick}
            title="Drug Policies"
            content={drugPolicyAgreement}
          />
          <hr />
          <Accordion
            selectedDocument={selectedDocument}
            handleItemClick={handleSetItemClick}
            title="Employee Handbooks"
            content={nomCompleteAgreement}
          />
          <hr />
          <Accordion
            selectedDocument={selectedDocument}
            handleItemClick={handleSetItemClick}
            title="Equipment Selection"
            content={equipmentAgreement}
          />
          <hr />
          <Accordion
            selectedDocument={selectedDocument}
            handleItemClick={handleSetItemClick}
            title="Non-Compete Agreements"
            content={nomCompleteAgreement}
          />
          <hr />
          <Accordion
            selectedDocument={selectedDocument}
            handleItemClick={handleSetItemClick}
            title="Payroll Handbook"
            content={payrollHandbook}
          />
        </div>
      </Card>
    </div>
  );
};

export default DocumentSelector;
