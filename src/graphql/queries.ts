import "reflect-metadata";
import UserService from "../services/user.service";
import AppointmentService from "../services/appointment.service";
import PatientService from "../services/patient.service";
import TransactionService from "../services/transactiondetails.service";
import {
  QueryGetAppointmentArgs,
  QueryGetPatientArgs,
  QueryGetUserArgs,
  QueryGetUserInformationArgs,
  QueryGetTransactionArgs,
} from "../generated/types";

const queries = {
  users: async () => {
    return UserService.users();
  },

  getUser: async (_: any, args: QueryGetUserArgs) => {
    const getUser = await UserService.getUser(args);
    return getUser;
  },

  getUserInformation: async (_: any, args: QueryGetUserInformationArgs) => {
    const getUserInformation = await UserService.getUserInformation(args);

    return getUserInformation;
  },

  appointments: async () => {
    return AppointmentService.appointments();
  },

  getAppointment: async (_: any, args: QueryGetAppointmentArgs) => {
    const getAppointment = await AppointmentService.getAppointment(args);

    return getAppointment;
  },

  patients: async () => {
    return PatientService.patients();
  },

  getPatient: async (_: any, args: QueryGetPatientArgs) => {
    const getPatient = await PatientService.getPatient(args);

    return getPatient;
  },

  transactions: async () => {
    return TransactionService.transactions();
  },

  getTransaction: async (_: any, args: QueryGetTransactionArgs) => {
    const getTransaction = await TransactionService.getTransaction(args);

    return getTransaction;
  },
};

export default queries;
