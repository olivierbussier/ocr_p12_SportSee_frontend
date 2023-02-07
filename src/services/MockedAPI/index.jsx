export class MockedAPI {
  USER_MAIN_DATA = [
    {
      id: 12,
      userInfos: {
        firstName: "Olivier",
        lastName: "Lamure",
        age: 22,
      },
      todayScore: 0.99,
      keyData: {
        calorieCount: 1930,
        proteinCount: 155,
        carbohydrateCount: 290,
        lipidCount: 50,
      },
    },
    {
      id: 18,
      userInfos: {
        firstName: "Marcel",
        lastName: "Lebon",
        age: 32,
      },
      score: 0.22,
      keyData: {
        calorieCount: 2500,
        proteinCount: 90,
        carbohydrateCount: 150,
        lipidCount: 120,
      },
    },
  ];

  USER_ACTIVITY = [
    {
      userId: 12,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 40,
          calories: 400,
        },
        {
          day: "2020-07-02",
          kilogram: 50,
          calories: 350,
        },
        {
          day: "2020-07-03",
          kilogram: 60,
          calories: 300,
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 250,
        },
        {
          day: "2020-07-05",
          kilogram: 80,
          calories: 200,
        },
        {
          day: "2020-07-06",
          kilogram: 90,
          calories: 150,
        },
        {
          day: "2020-07-07",
          kilogram: 99,
          calories: 99,
        },
      ],
    },
    {
      userId: 18,
      sessions: [
        {
          day: "2020-07-01",
          kilogram: 70,
          calories: 240,
        },
        {
          day: "2020-07-02",
          kilogram: 69,
          calories: 220,
        },
        {
          day: "2020-07-03",
          kilogram: 70,
          calories: 280,
        },
        {
          day: "2020-07-04",
          kilogram: 70,
          calories: 500,
        },
        {
          day: "2020-07-05",
          kilogram: 69,
          calories: 160,
        },
        {
          day: "2020-07-06",
          kilogram: 69,
          calories: 162,
        },
        {
          day: "2020-07-07",
          kilogram: 69,
          calories: 390,
        },
      ],
    },
  ];

  USER_AVERAGE_SESSIONS = [
    {
      userId: 12,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 23,
        },
        {
          day: 3,
          sessionLength: 45,
        },
        {
          day: 4,
          sessionLength: 50,
        },
        {
          day: 5,
          sessionLength: 0,
        },
        {
          day: 6,
          sessionLength: 0,
        },
        {
          day: 7,
          sessionLength: 60,
        },
      ],
    },
    {
      userId: 18,
      sessions: [
        {
          day: 1,
          sessionLength: 30,
        },
        {
          day: 2,
          sessionLength: 40,
        },
        {
          day: 3,
          sessionLength: 50,
        },
        {
          day: 4,
          sessionLength: 30,
        },
        {
          day: 5,
          sessionLength: 30,
        },
        {
          day: 6,
          sessionLength: 50,
        },
        {
          day: 7,
          sessionLength: 50,
        },
      ],
    },
  ];

  USER_PERFORMANCE = [
    {
      userId: 12,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 80,
          kind: 1,
        },
        {
          value: 120,
          kind: 2,
        },
        {
          value: 140,
          kind: 3,
        },
        {
          value: 50,
          kind: 4,
        },
        {
          value: 200,
          kind: 5,
        },
        {
          value: 90,
          kind: 6,
        },
      ],
    },
    {
      userId: 18,
      kind: {
        1: "cardio",
        2: "energy",
        3: "endurance",
        4: "strength",
        5: "speed",
        6: "intensity",
      },
      data: [
        {
          value: 200,
          kind: 1,
        },
        {
          value: 240,
          kind: 2,
        },
        {
          value: 80,
          kind: 3,
        },
        {
          value: 80,
          kind: 4,
        },
        {
          value: 220,
          kind: 5,
        },
        {
          value: 110,
          kind: 6,
        },
      ],
    },
  ];

  UID = {
    12: 0,
    18: 1,
  };

  getUsers = () => this.Users;

  fetchUserData = (userId) =>
    Promise.resolve(this.USER_MAIN_DATA[this.UID[userId]]);

  fetchActivityData = (userId) =>
    Promise.resolve(this.USER_ACTIVITY[this.UID[userId]]);

  fetchAverageData = (userId) =>
    Promise.resolve(this.USER_AVERAGE_SESSIONS[this.UID[userId]]);

  fetchPerformanceData = (userId) =>
    Promise.resolve(this.USER_PERFORMANCE[this.UID[userId]]);
}
