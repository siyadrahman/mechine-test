import { Form, Formik } from "formik";
import { FC } from "react";
import Button from "../../components/button/button";
import Select from "../../components/select/select";
import TextField from "../../components/textField/textField";
import * as Yup from "yup";
import "./step1.css";

const Step1: FC<{ submit: any }> = (props: any) => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("required"),
    class: Yup.string().required("required"),
    gender: Yup.string().required("required"),
    bloodGroup: Yup.string().required("required"),
    civilId: Yup.string().required("required"),
    civilIdExp: Yup.string().required("required"),
    dob: Yup.string().required("required"),
    passportNo: Yup.string().required("required"),
    passportplaceOfIssue: Yup.string().required("required"),
    dateChildEntered: Yup.string().required("required"),
    nationality: Yup.string().required("required"),
    religion: Yup.string().required("required"),
    passportDateOfIssue: Yup.string().required("required"),
    passportDateOfExpiry: Yup.string().required("required"),
  });
  return (
    <div className="step-1-container">
      <div className="title">Student Details</div>
      <Formik
        enableReinitialize
        initialValues={{
          firstName: "",
          middleName: "",
          lastName: "",
          class: "",
          gender: "",
          bloodGroup: "",
          motherTounge: "",
          civilId: "",
          civilIdExp: "",
          dob: "",
          placeOfBirth: "",
          passportNo: "",
          passportplaceOfIssue: "",
          prevSchool: "",
          dateChildEntered: "",
          nationality: "",
          religion: "",
          passportDateOfIssue: "",
          passportDateOfExpiry: "",
          illness: "",
          file: null,
          buildingVo: "",
          flat: "",
          block: "",
          street: "",
          floor: "",
          country: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          props.submit(values);
        }}
      >
        {({
          values,
          handleSubmit,
          submitForm,
          touched,
          errors,
          handleChange,
          setFieldValue,
        }) => (
          <Form onSubmit={handleSubmit} className="form">
            <div className="session-1">
              <div className="name-row">
                <div className="name-row-input">
                  <TextField
                    value={values.firstName}
                    name="firstName"
                    label="First name"
                    handleChange={handleChange}
                    isError={touched.firstName && Boolean(errors.firstName)}
                    error={errors.firstName}
                  />
                </div>
                <div className="name-row-input">
                  <TextField
                    value={values.middleName}
                    name="middleName"
                    label="Middle name"
                    handleChange={handleChange}
                    isError={touched.middleName && Boolean(errors.middleName)}
                    error={errors.middleName}
                  />
                </div>
                <div className="name-row-input">
                  <TextField
                    value={values.lastName}
                    name="lastName"
                    label="Last name"
                    handleChange={handleChange}
                    isError={touched.lastName && Boolean(errors.lastName)}
                    error={errors.lastName}
                  />
                </div>
              </div>
              <div className="name-row">
                <div className="name-row-input">
                  <div className="detail-row">
                    <div className="detail-input">
                      <Select
                        value={values.class}
                        name="class"
                        label="Class"
                        handleChange={(e: any) => setFieldValue("class", e)}
                        isError={touched.class && Boolean(errors.class)}
                        error={errors.class}
                        options={[1, 2, 3]}
                      />
                    </div>
                    <div className="detail-input">
                      <Select
                        value={values.gender}
                        name="gender"
                        label="Gender"
                        handleChange={(e: any) => setFieldValue("gender", e)}
                        isError={touched.gender && Boolean(errors.gender)}
                        error={errors.gender}
                        options={["male", "female"]}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-input">
                      <Select
                        value={values.bloodGroup}
                        name="bloodGroup"
                        label="Blood Group"
                        handleChange={(e: any) =>
                          setFieldValue("bloodGroup", e)
                        }
                        isError={
                          touched.bloodGroup && Boolean(errors.bloodGroup)
                        }
                        error={errors.bloodGroup}
                        options={["A+", "A-", "B+", "B-"]}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.motherTounge}
                        name="motherTounge"
                        label="Mother Toungue"
                        handleChange={handleChange}
                        isError={
                          touched.motherTounge && Boolean(errors.motherTounge)
                        }
                        error={errors.motherTounge}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-input">
                      <TextField
                        value={values.civilId}
                        name="civilId"
                        label="Civil ID No"
                        handleChange={handleChange}
                        isError={touched.civilId && Boolean(errors.civilId)}
                        error={errors.civilId}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.civilIdExp}
                        name="civilIdExp"
                        label="Civil ID Date of Expiry"
                        type="date"
                        handleChange={handleChange}
                        isError={
                          touched.civilIdExp && Boolean(errors.civilIdExp)
                        }
                        error={errors.civilIdExp}
                      />
                    </div>
                  </div>
                </div>
                <div className="name-row-input">
                  <div className="detail-row">
                    <div className="detail-input">
                      <TextField
                        value={values.dob}
                        name="dob"
                        label="Date of Birth"
                        type="date"
                        handleChange={handleChange}
                        isError={touched.dob && Boolean(errors.dob)}
                        error={errors.dob}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.placeOfBirth}
                        name="placeOfBirth"
                        label="Place of Birth"
                        handleChange={handleChange}
                        isError={
                          touched.placeOfBirth && Boolean(errors.placeOfBirth)
                        }
                        error={errors.placeOfBirth}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-input">
                      <TextField
                        value={values.passportNo}
                        name="passportNo"
                        label="Passport No"
                        handleChange={handleChange}
                        isError={
                          touched.passportNo && Boolean(errors.passportNo)
                        }
                        error={errors.passportNo}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.passportplaceOfIssue}
                        name="passportplaceOfIssue"
                        label="Passport Place of issue"
                        handleChange={handleChange}
                        isError={
                          touched.passportplaceOfIssue &&
                          Boolean(errors.passportplaceOfIssue)
                        }
                        error={errors.passportplaceOfIssue}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-input">
                      <TextField
                        value={values.prevSchool}
                        name="prevSchool"
                        label="Previous School Attended"
                        handleChange={handleChange}
                        isError={
                          touched.prevSchool && Boolean(errors.prevSchool)
                        }
                        error={errors.prevSchool}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.dateChildEntered}
                        name="dateChildEntered"
                        label="Date(Child Entered kuwait)"
                        type="date"
                        handleChange={handleChange}
                        isError={
                          touched.dateChildEntered &&
                          Boolean(errors.dateChildEntered)
                        }
                        error={errors.dateChildEntered}
                      />
                    </div>
                  </div>
                </div>
                <div className="name-row-input">
                  <div className="detail-row">
                    <div className="detail-input">
                      <Select
                        value={values.nationality}
                        name="nationality"
                        label="Nationality"
                        handleChange={(e: any) =>
                          setFieldValue("nationality", e)
                        }
                        isError={
                          touched.nationality && Boolean(errors.nationality)
                        }
                        error={errors.nationality}
                        options={["India", "Other"]}
                      />
                    </div>
                    <div className="detail-input">
                      <Select
                        value={values.religion}
                        name="religion"
                        label="Religion"
                        handleChange={(e: any) => setFieldValue("religion", e)}
                        isError={touched.religion && Boolean(errors.religion)}
                        error={errors.religion}
                        options={["Religion1", "Religion2"]}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <div className="detail-input">
                      <TextField
                        value={values.passportDateOfIssue}
                        name="passportDateOfIssue"
                        label="Passport Date of Issue"
                        type="date"
                        handleChange={handleChange}
                        isError={
                          touched.passportDateOfIssue &&
                          Boolean(errors.passportDateOfIssue)
                        }
                        error={errors.passportDateOfIssue}
                      />
                    </div>
                    <div className="detail-input">
                      <TextField
                        value={values.passportDateOfExpiry}
                        name="passportDateOfExpiry"
                        label="Passport Date of Expiry"
                        type="date"
                        handleChange={handleChange}
                        isError={
                          touched.passportDateOfExpiry &&
                          Boolean(errors.passportDateOfExpiry)
                        }
                        error={errors.passportDateOfExpiry}
                      />
                    </div>
                  </div>
                  <div className="detail-row">
                    <TextField
                      value={values.illness}
                      name="illness"
                      label="Specify Child's illness(is any)"
                      handleChange={handleChange}
                      isError={touched.illness && Boolean(errors.illness)}
                      error={errors.illness}
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="name-row-input">
                  <TextField
                    value={values.file}
                    name="file"
                    label="Photo"
                    type="file"
                    handleChange={handleChange}
                    isError={touched.file && Boolean(errors.file)}
                    error={errors.file}
                  />
                </div>
              </div>
            </div>
            <div className="home-Address">
              <div className="home-title">Home Address</div>
              <div className="name-row">
                <div className="address-input">
                  <TextField
                    value={values.buildingVo}
                    name="buildingVo"
                    label="Building No"
                    handleChange={handleChange}
                    isError={touched.buildingVo && Boolean(errors.buildingVo)}
                    error={errors.buildingVo}
                  />
                </div>
                <div className="address-input">
                  <TextField
                    value={values.flat}
                    name="flat"
                    label="Flat No"
                    handleChange={handleChange}
                    isError={touched.flat && Boolean(errors.flat)}
                    error={errors.flat}
                  />
                </div>
                <div className="address-input">
                  <TextField
                    value={values.block}
                    name="block"
                    label="Block No"
                    handleChange={handleChange}
                    isError={touched.block && Boolean(errors.block)}
                    error={errors.block}
                  />
                </div>
                <div className="address-input">
                  <TextField
                    value={values.street}
                    name="street"
                    label="Street"
                    handleChange={handleChange}
                    isError={touched.street && Boolean(errors.street)}
                    error={errors.street}
                  />
                </div>
                <div className="address-input">
                  <TextField
                    value={values.floor}
                    name="floor"
                    label="Floor No"
                    handleChange={handleChange}
                    isError={touched.floor && Boolean(errors.floor)}
                    error={errors.floor}
                  />
                </div>
                <div className="address-input">
                  <TextField
                    value={values.country}
                    name="country"
                    label="Country"
                    handleChange={handleChange}
                    isError={touched.country && Boolean(errors.country)}
                    error={errors.country}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
              <div className="button-view">
                <Button value="Next" onClick={submitForm} varient="blue" />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Step1;
