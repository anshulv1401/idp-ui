import { deviceType } from "./clientConstants";

const pinFields = [
  {
    labelText: "Uin",
    labelFor: "Mosip Uin",
    id: "mosip-uin",
    name: "uin",
    type: "text",
    autoComplete: "uin",
    isRequired: true,
    placeholder: "UIN or VID",
  },
  {
    labelText: "Pin",
    labelFor: "pin",
    id: "pin",
    name: "pin",
    type: "password",
    autoComplete: "",
    isRequired: true,
    placeholder: "Enter PIN",
  },
];

const otpFields = [
  {
    labelText: "Vid",
    labelFor: "Mosip vid",
    id: "mosip-vid",
    name: "vid",
    type: "text",
    autoComplete: "vid",
    isRequired: true,
    placeholder: "VID",
  },
  {
    labelText: "Otp",
    labelFor: "otp",
    id: "otp",
    name: "otp",
    type: "password",
    autoComplete: "",
    isRequired: true,
    placeholder: "1234",
  },
];

//TODO remove
const bioLoginFields = [
  {
    labelText: "Vid",
    labelFor: "Mosip vid",
    id: "mosip-vid",
    name: "vid",
    type: "text",
    autoComplete: "vid",
    isRequired: true,
    placeholder: "VID",
  },
];

const faceBioLoginFields = {
  inputFields: [
    {
      labelText: "Enter your VID",
      labelFor: "Mosip vid",
      id: "mosip-vid",
      name: "vid",
      type: "text",
      autoComplete: "vid",
      isRequired: true,
      placeholder: "VID",
    },
  ],
  bioFields: [
    {
      id: "faceBiometric",
      name: "faceBiometric",
      modality: deviceType.face,
    },
  ],
};

const fingerBioLoginFields = {
  inputFields: [
    {
      labelText: "Enter your VID",
      labelFor: "Mosip vid",
      id: "mosip-vid",
      name: "vid",
      type: "text",
      autoComplete: "vid",
      isRequired: true,
      placeholder: "VID",
    },
  ],
  bioFields: [
    {
      id: "fingerBiometric",
      name: "fingerBiometric",
      modality: deviceType.finger,
    },
  ],
};

const irisBioLoginFields = {
  inputFields: [
    {
      labelText: "Enter your VID",
      labelFor: "Mosip vid",
      id: "mosip-vid",
      name: "vid",
      type: "text",
      autoComplete: "vid",
      isRequired: true,
      placeholder: "VID",
    },
  ],
  bioFields: [
    {
      id: "irisBiometric",
      name: "irisBiometric",
      modality: deviceType.iris,
    },
  ],
};

const signupFields = [
  {
    labelText: "Username",
    labelFor: "username",
    id: "username",
    name: "username",
    type: "text",
    autoComplete: "username",
    isRequired: true,
    placeholder: "Username",
  },
  {
    labelText: "Vid",
    labelFor: "mosip-vid",
    id: "mosip-vid",
    name: "vid",
    type: "text",
    autoComplete: "vid",
    isRequired: true,
    placeholder: "Mosip vid",
  },
  {
    labelText: "Password",
    labelFor: "password",
    id: "password",
    name: "password",
    type: "password",
    autoComplete: "current-password",
    isRequired: true,
    placeholder: "Password",
  },
  {
    labelText: "Confirm Password",
    labelFor: "confirm-password",
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    autoComplete: "confirm-password",
    isRequired: true,
    placeholder: "Confirm Password",
  },
];

//TODO fetch tablist from oidcDetails response
const tabList = [
  {
    name: "Sign in with PIN",
    icon: "space-shuttle",
    comp: "PIN",
  },
  {
    name: "Log in with Inji",
    icon: "cog",
    comp: "QRCode",
  },
  {
    name: "Log in with face",
    icon: "face_capture",
    comp: "FaceBiometric",
  },
  {
    name: "Log in with iris",
    icon: "iris_capture",
    comp: "IrisBiometric",
  },
  {
    name: "Log in with fingerprint",
    icon: "finger_capture",
    comp: "FingerBiometric",
  },
];

export {
  pinFields,
  otpFields,
  signupFields,
  tabList,
  bioLoginFields,
  faceBioLoginFields,
  fingerBioLoginFields,
  irisBioLoginFields,
};
