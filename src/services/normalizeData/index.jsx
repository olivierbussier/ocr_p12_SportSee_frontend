    /**
 * This function is used to check and normalize data fetched from the API
 *
 * @param {Object} data User data to normalize
 */
export const normalizeDataUser = (data) => {
  /*
    data structure:
    {
        id: int
        userInfos: {
            firstName: string,
            lastName: string,
            age: int (31),
        },
        todayScore | score: float (0.12),
        keyData: {
            calorieCount: int,
            proteinCount: int,
            carbohydrateCount: int,
            lipidCount: int
        }
    }
    */

    // id
    const idOk = (typeof data.id === 'number') ? true : false
    // userInfos
    const userInfosOk = (
        data.userInfos &&
          (typeof data.userInfos.firstName === 'string') &&
          (typeof data.userInfos.lastName === 'string') &&
          (typeof data.userInfos.age === 'number') ? true : false
    )
    // score ou todayScore
    const todayScoreOk = (
        (typeof data.todayScore === 'number') ||
        (typeof data.score === 'number') ? true : false
    )
    if (todayScoreOk && data.score) {
        data.todayScore = data.score
        delete data.score
    }
    // KeyData
    const keyDataOk = (
        (typeof data.keyData === 'object') &&
        (typeof data.keyData.calorieCount === 'number') &&
        (typeof data.keyData.proteinCount === 'number') &&
        (typeof data.keyData.carbohydrateCount === 'number') &&
        (typeof data.keyData.lipidCount === 'number') ? true : false
    )

    if (idOk && userInfosOk && todayScoreOk && keyDataOk) {
        return data
     } else {
        throw new Error('erreur de donnée')
     }
};

export const normalizeDataActivity = (data) => {
  /*
    Data structure:
    {
        userId: 12,
        sessions: [
            {
                day: "2020-07-01",
                kilogram: 80,
                calories: 240,
            },
            ...
        ],
    }
  */
  const idOk = (typeof data.userId === 'number') ? true : false
  const sessionsOk = (
      (typeof data.sessions === 'object' && data.sessions.length > 0) ? true : false
  )
  const sessionsEachOk = data.sessions.reduce((accu, current) => {
      return accu &&
        (typeof current.day === 'string') &&
        (typeof current.kilogram === 'number') &&
        (typeof current.calories === 'number')
  }, true)

  if (idOk && sessionsOk && sessionsEachOk) {
      return data
   } else {
      throw new Error('erreur de donnée')
   }
}

export const normalizeDataDuree = (data) => {
    /*
    Data structure :
    {
        userId: int,
        sessions: [
            {
                day: int,
                sessionLength: int,
            },
            ...
        ]
    }
    */
    const idOk = (typeof data.userId === 'number') ? true : false
    const sessionsOk = (
        (typeof data.sessions === 'object' && data.sessions.length > 0) ? true : false
    )
    const sessionsEachOk = data.sessions.reduce((accu, current) => {
        return accu && (typeof current.day === 'number') && (typeof current.sessionLength === 'number')
    }, true)

    if (idOk && sessionsOk && sessionsEachOk) {
        return data
     } else {
        throw new Error('erreur de donnée')
     }
}

export const normalizeDataPerformance = (data) => {
    /*
    Data structure :
    {
        userId: 12,
        kind: {
            1: "cardio",
            ...
        },
        data: [
            {
                value: 80,
                kind: 1,
            },
            ...
        ],
    },

    */

    // Verification of the id
    const idOk = (typeof data.userId === 'number') ? true : false
    // Verification of kind as object
    const kindOk = (
        (typeof data.kind === 'object' && Object.keys(data.kind).length > 0) ? true : false
    )
    // Verification that kind length equal tab length
    const dataOk = (
        (typeof data.data === 'object' && data.data.length > 0) &&
        (Object.keys(data.kind).length === data.data.length)
    )
    // Verification of data elements
    const dataEachOk = data.data.reduce((accu, current) => {
        return accu && (typeof current.value === 'number' && typeof current.kind === 'number')
    }, true)
    // Verification that kind of all kind in data elements are in kind object
    const dataCoherenceOk = data.data.reduce((accu, current) => {
        return accu && (Object.keys(data.kind).includes(current.kind.toString()))
    }, true)

    if (idOk && kindOk && dataOk && dataEachOk && dataCoherenceOk) {
        return data
     } else {
        throw new Error('erreur de donnée')
     }
}