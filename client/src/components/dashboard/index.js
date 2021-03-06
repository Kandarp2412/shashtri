import React, { useEffect, useState } from "react";
import { Button, TextField } from "@mui/material";
import axios from "axios";

function Dashboard() {
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState("");
  const [link, setLink] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    try {
      axios.post("http://localhost:4000/createAccount", inputs).then((res) => {
        if (res.data.messege === "error") {
          return setError(res.data.error);
        }
        console.log(res.data.data);
        window.location.href = res.data.customerInfo.url;
        // let config = {
        //   headers: {
        //     header1: "value",
        //   },
        // };
        axios
          .post("http://localhost:4000/webhook", {
            created: 1326853478,
            livemode: false,
            id: "evt_00000000000000",
            type: "account.updated",
            object: "event",
            request: null,
            pending_webhooks: 1,
            api_version: "2020-08-27",
            data: {
              object: {
                id: res.data.data,
                object: "account",
                business_profile: {
                  mcc: "5734",
                  name: null,
                  product_description: "software and website services",
                  support_address: null,
                  support_email: null,
                  support_phone: "+918460182991",
                  support_url: null,
                  url: "https://www.webbrainstechnologies.com",
                },
                business_type: "individual",
                capabilities: {
                  card_payments: "active",
                  transfers: "active",
                },
                charges_enabled: true,
                company: {
                  address: {
                    city: "Vadodara",
                    country: "IN",
                    line1: "D103 kishan classic",
                    line2: "Vasna Bhaiyili Road",
                    postal_code: "390021",
                    state: "GJ",
                  },
                  directors_provided: false,
                  executives_provided: false,
                  owners_provided: false,
                  verification: {
                    document: {
                      back: null,
                      details: null,
                      details_code: null,
                      front: null,
                    },
                  },
                },
                controller: {
                  type: "account",
                },
                country: "US",
                created: 1387474124,
                default_currency: "USD",
                details_submitted: true,
                email: "test@stripe.com",
                external_accounts: {
                  object: "list",
                  data: [
                    {
                      id: "ba_00000000000000",
                      object: "bank_account",
                      account: "acct_00000000000000",
                      account_holder_name: "jaimin prajapati",
                      account_holder_type: null,
                      account_type: null,
                      available_payout_methods: ["standard"],
                      bank_name: "HDFC BANK - 390240028",
                      country: "IN",
                      currency: "inr",
                      default_for_currency: true,
                      fingerprint: "KQdy0poeRZ97WFFn",
                      last4: "8392",
                      metadata: {},
                      routing_number: "HDFC0009125",
                      status: "new",
                    },
                  ],
                  has_more: false,
                  url: "/v1/accounts/acct_1039TY2m5fPKBOnn/external_accounts",
                },
                future_requirements: {
                  alternatives: [],
                  current_deadline: null,
                  currently_due: [],
                  disabled_reason: null,
                  errors: [],
                  eventually_due: [],
                  past_due: [],
                  pending_verification: [],
                },
                individual: {
                  id: "person_00000000000000",
                  object: "person",
                  account: "acct_00000000000000",
                  address: {
                    city: "Vadodara",
                    country: "IN",
                    line1: "D103 kishan classic",
                    line2: "Vasna Bhaiyili Road",
                    postal_code: "390021",
                    state: "GJ",
                  },
                  created: 1415145600,
                  dob: {
                    day: 30,
                    month: 6,
                    year: 1991,
                  },
                  first_name: "jaimin",
                  future_requirements: {
                    alternatives: [],
                    currently_due: [],
                    errors: [],
                    eventually_due: [],
                    past_due: [],
                    pending_verification: [],
                  },
                  id_number_provided: true,
                  last_name: "prajapati",
                  metadata: {},
                  relationship: {
                    director: false,
                    executive: false,
                    owner: true,
                    percent_ownership: null,
                    representative: true,
                    title: null,
                  },
                  requirements: {
                    alternatives: [],
                    currently_due: [],
                    errors: [],
                    eventually_due: [],
                    past_due: [],
                    pending_verification: [],
                  },
                  ssn_last_4_provided: true,
                  verification: {
                    additional_document: {
                      back: null,
                      details: null,
                      details_code: null,
                      front: null,
                    },
                    details: null,
                    details_code: null,
                    document: {
                      back: null,
                      details: null,
                      details_code: null,
                      front: null,
                    },
                    status: "verified",
                  },
                },
                metadata: {},
                payouts_enabled: true,
                requirements: {
                  alternatives: [],
                  current_deadline: null,
                  currently_due: [],
                  disabled_reason: null,
                  errors: [],
                  eventually_due: [],
                  past_due: [],
                  pending_verification: [],
                },
                settings: {
                  bacs_debit_payments: {},
                  branding: {
                    icon: null,
                    logo: null,
                    primary_color: null,
                    secondary_color: null,
                  },
                  card_issuing: {
                    tos_acceptance: {
                      date: null,
                      ip: null,
                    },
                  },
                  card_payments: {
                    decline_on: {
                      avs_failure: false,
                      cvc_failure: false,
                    },
                    statement_descriptor_prefix: null,
                  },
                  dashboard: {
                    display_name: "Webbrains_2",
                    timezone: "Etc/UTC",
                  },
                  payments: {
                    statement_descriptor: "WWW.WEBBRAINSTECHNOLOGIES.COM",
                    statement_descriptor_kana: null,
                    statement_descriptor_kanji: null,
                  },
                  payouts: {
                    debit_negative_balances: true,
                    schedule: {
                      delay_days: 7,
                      interval: "daily",
                    },
                    statement_descriptor: null,
                  },
                  sepa_debit_payments: {},
                },
                tos_acceptance: {
                  date: 1633073699,
                  ip: "106.215.47.4",
                  user_agent:
                    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36",
                },
                type: "standard",
                statement_descriptor: "TEST",
              },
              previous_attributes: {
                verification: {
                  fields_needed: [],
                  due_by: null,
                },
              },
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      });
    } catch (error) {
      setError(error.messege);
    }
  };

  return (
    <div>
      {error ? (
        <div style={{ color: "red" }}>
          <h4>{error}</h4>
        </div>
      ) : (
        ""
      )}

      <div
        style={{
          height: "250px",
          marginTop: "45px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div>
          <TextField
            label='Enter name'
            variant='outlined'
            name='name'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <TextField
            label='Enter email'
            variant='outlined'
            name='email'
            onChange={handleInputChange}
          />
        </div>

        <div>
          <TextField
            label='Enter description'
            variant='outlined'
            name='description'
            onChange={handleInputChange}
          />
        </div>
        <div>
          <Button onClick={handleSubmit} variant='contained'>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
