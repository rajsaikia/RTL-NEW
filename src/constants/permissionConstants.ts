interface Actions {
  MODULE_ID: string;
  CREATE?: string;
  UPDATE?: string;
  DELETE?: string;
  READ?: string;
  SUBMIT?: string;
  UPLOAD?: string;
}

interface PermissionConstants {
  [key:string]: Actions;
  
}

export const PERMISSIONS: PermissionConstants = {
  DASHBOARD: {
    MODULE_ID: "106",
    READ: "PER__124",
  },
  DAILY_DATA_EXCEL: {
    MODULE_ID: "105",
    READ: "PER__122",
    UPLOAD: "PER__134",
    SUBMIT: "PER__133",
  },
  FUEL_PRICE_CONFIGURATION_MASTER_DATA: {
    MODULE_ID: "103",
    READ: "PER__114",
    CREATE: "PER__112",
    SUBMIT: "PER__135",
  },
  FUEL_PRICE_REQUEST_HISTORY: {
    MODULE_ID: "104",
    READ: "PER__118",
  },
  FUEL_PRICE_MONTHLY_APPROVALS: {
    MODULE_ID: "107",
    READ: "PER__129",
  },
  GASOLINE_DIESEL_REPORT: {
    MODULE_ID: "108",
    READ: "PER__136",
  },
  BRENT_REPORT: {
    MODULE_ID: "109",
    READ: "PER__137",
  },
  ULG_GO_REPORT: {
    MODULE_ID: "110",
    READ: "PER__138",
  },
  FINAL_FUEL_PRICE_REPORT: {
    MODULE_ID: "111",
    READ: "PER__139",
  },
  DAILY_DATA_CAPTURE:{
    MODULE_ID: "101",
    READ: "PER__106",
  },
  USER_MANAGEMENT:{
    MODULE_ID: "112",
    READ: "PER__143",
    CREATE: "PER__140",
  },
  ROLES_MANAGEMENT:{
    MODULE_ID: "139",
    READ: "PER__149",
    CREATE: "PER__148",
  },
  FUEL_PRICING_APPROVERS:{
    MODULE_ID: "140",
    READ: "PER__153",
    CREATE: "PER__152",
  },
  RSS_FEED:
  {
    MODULE_ID:"141",
    READ: "PER__156",
    CREATE: "PER__155",
    

  }
};
