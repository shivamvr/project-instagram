

export const saveLoginDetail = (user) => {
    localStorage.setItem('detail' ,JSON.stringify(user))
}

export const getDetail = (user) => {
    const detail = JSON.parse(localStorage.getItem(user))
    return detail
}

export const getUser = async (enteredEmail,enteredPassword) => {
    let url = `https://json-web.herokuapp.com/users?email=${enteredEmail}&password=${enteredPassword}`
    const res = await fetch(url)
    const resUser = await res.json()
    return await resUser[0]
  }


