import React from "react";
import { useForm } from "react-hook-form";
import CheckboxGroup from "../../../components/form/CheckboxGroup/CheckboxGroup";
import "./ReleasedDocuments.scss";

interface ReleasedDocumentsProps {}

interface FormData {
  selectedOptions: string[];
}

const options = [
  { value: "option1", label: "Lurem Ipsum dolar set document" },
  { value: "option2", label: "Lurem Ipsum dolar set document" },
];

const ReleasedDocuments: React.FC<ReleasedDocumentsProps> = ({}) => {
  const { handleSubmit, register } = useForm<FormData>(); // Get the register function from useForm

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="released-documents">
      <p className="released-documents__title">Released Documents</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <CheckboxGroup
          name="selectedOptions"
          label="Select Options"
          options={options}
          register={register}
        />

        {/* <button type="submit">Submit</button> */}
      </form>
    </div>
  );
};

export default ReleasedDocuments;
