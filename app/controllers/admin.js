const admin = require("../models/admin");
const otp = require("../models/otp");

// Create and Save a new admin
exports.signUp = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.create( req, res);
};
exports.signIn = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.VerifyEmailSignIn( req, res);
};
exports.sendEmail = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.sendEmail( req, res);
};

exports.GetAdminByID = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.GetAdminByID( req, res);
};

exports.updateProfile = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.updateProfile( req, res);
};

exports.verifyOTPSignIn = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.verifyOTPSignIn( req, res);
};

exports.VerifyEmailChangePassword = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.VerifyEmailChangePassword( req, res);
};

exports.verifyOTPChangePassword = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.verifyOTPChangePassword( req, res);
};



exports.GetAllUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.GetAllUser( req, res);
};

exports.BlockUnblockUser = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.BlockUnblockUser( req, res);
};

exports.GetUserByID = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.GetUserByID( req, res);
};




exports.GooglesignIn = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.GooglesignIn( req, res);
};

exports.passwordReset = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.resetPassword( req, res);
};
exports.verifyEmail = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.VerifyEmail( req, res);
};
exports.newPassword = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  admin.newPassword( req, res);
};

exports.verifyOTP = (req, res) => {
  if (!req.body) {
    res.json({
      message: "Content can not be empty!",
      status: false,
     });
  }  
  otp.verifyOTP( req, res);
};