import React from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";
import Select from "../../components/form/Select/Select";
import FormPageContainer from "../../components/FormPageContainer/FormPageContainer";
import "./ChooseCompanyPage.scss";


interface ChooseCompanyData {
  company: string; // Change to the appropriate data type for company selection
}

const ChooseCompanyPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ChooseCompanyData>();

  const onSubmit = (data: ChooseCompanyData) => {
    console.log("Submitting company selection...");
    console.log("Selected Company:", data.company);
    // Perform submission logic here
  };

  // Example options for the select component
  const companyOptions = [
    { value: "company1", label: "Company 1" },
    { value: "company2", label: "Company 2" },
    { value: "company3", label: "Company 3" },
  ];

  return (
    <FormPageContainer
      title="Choose Company"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
    >
      <div className="choose-company-page__form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Select
              id="company"
              label="Choose company"
              placeholder="Choose company"
              options={companyOptions}
              {...register("company", { required: "Company selection is required" })}
              // error={errors.company}
            />
          </div>
          <Button
            type="submit"
            className="choose-company-page__button"
            text="Confirm"
            variant="primary"
            fullWidth
          />
        </form>
      </div>
    </FormPageContainer>
  );
};

export default ChooseCompanyPage;