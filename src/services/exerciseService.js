import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/exercises`

const index = async () => {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const show = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    })
    return res.json()
  } catch (error) {
    console.log(error)
    }
}

const create = async (exerciseData) => {
  try{  
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exerciseData)
  })
  return res.json()
} catch (error) {
  console.log(error)
  }
}

const update = async (exerciseData) => {
  try {
    const res = await fetch(`${BASE_URL}/${exerciseData._id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(exerciseData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteExercise = async (id) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const createComment = async (id, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${id}/comments`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const updateComment = async (exerciseId, commentId, commentData) => {
  try {
    const res = await fetch(`${BASE_URL}/${exerciseId}/comments/${commentId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

const deleteComment = async (exerciseId, commentId) => {
  try {
    const res = await fetch(`${BASE_URL}/${exerciseId}/comments/${commentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      }
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  index,
  show,
  create,
  update,
  deleteExercise,
  createComment,
  updateComment,
  deleteComment,
}
