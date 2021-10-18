import headers from "./headers"
const BASE_URL = "http://localhost:8080"

export const getStudents = async () => {
    const res = await fetch(BASE_URL+"/alunos", {
        method:"GET",
        headers
    })
    return res.json()
}

export const postStudent = async (nome, matricula) => {
    const res = await fetch(BASE_URL+"/aluno", {
        method:"POST",
        headers,
        body:JSON.stringify({nome, matricula})
    })
    return res.json()
}

export const getOneStudent = async (id) => {
    const res = await fetch(BASE_URL+`/aluno/${id}`, {
        method:"GET",
        headers
    })
    return res.json()
}

export const putStudent = async(id, nome, matricula) => {
    const res = await fetch(BASE_URL+`/aluno/${id}`, {
        method:"PUT",
        headers,
        body:JSON.stringify({nome, matricula})
    })
    return res.json()
}

export const deleteStudent = async (id) => {
    const res = await fetch(BASE_URL+`/aluno/${id}`, {
        method:"DELETE",
        headers
    })
    return res.json()
}
