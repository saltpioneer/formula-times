import { URL } from "url";

export type Driver = {
  number: number;
  fullName: string;
  team: string;
  countryCode: string;
  teamColor: number;
  headshot: string;
  acronym: string;
};

export type Car = {
  speed: number;
  drs: number;
  driver_number: number;
};
