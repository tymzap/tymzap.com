"use client";

import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "thisFieldIsRequired",
  },
  string: {
    email: "enterAValidEmailAddress",
  },
});
