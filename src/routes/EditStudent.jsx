import React, {useEffect, useState} from "react"
import { useParams, useHistory } from "react-router"
import Swal from "sweetalert2"
import { Page, TextInput, Button, Label } from "../styledComponents"
import { getOneStudent, putStudent } from "../api/api"

const EditStudent = () => {
    const params = useParams()
    const history = useHistory()
    let [name, setName] = useState("")
    let [copyName, setCopyName] = useState("")
    let [matricula, setMatricula] = useState("")
    const getStudent = async () => {
        let json = await getOneStudent(params.id)
        setName(json.nome)
        setMatricula(json.matricula)
        setCopyName(json.nome)
    }
    const updateStudent = async () => {
        let json = await putStudent(params.id, name, matricula)
        if(json === "Atualizado com sucesso"){
            Swal.fire({
                title:"Atualizado com sucesso",
                icon:"info",
                html:"Aluno atualizado com sucesso"
            }).then(() => {
                history.push("/")
            })
        }
    }
    useEffect(() => {
        async function fetchData() {
            await getStudent()
        }
        fetchData()
    }, [])
    return (
        <Page>
            <h2>Editando estudante {copyName}</h2>
            <>
                <Label htmlFor="name">Nome do aluno</Label>
                <TextInput name="name" type="text" value={name} onChange={e => setName(e.target.value)} />
                <Label htmlFor="matricula">Matrícula do aluno</Label>
                <TextInput name="matricula" type="number" value={matricula} onChange={e => setMatricula(e.target.value)}/>
                <Button color="#3393ff" borderColor="blue" onClick={() => updateStudent()}>Atualizar</Button>
            </>
        </Page>
    )
}

export default EditStudent