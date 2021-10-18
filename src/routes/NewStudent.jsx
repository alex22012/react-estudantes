import React, {useState} from "react"
import { useHistory } from "react-router"
import { postStudent } from "../api/api"
import { Page, TextInput, Button } from "../styledComponents"
import Swal from "sweetalert2"

const NewStudent = () => {
    const history = useHistory()
    let [name, setName] = useState("")
    let [matricula, setMatricula] = useState("")
    const newStudent = async () => {
        let json = await postStudent(name, matricula)
        if(json === "Inserido com sucesso"){
            Swal.fire(
                "Inserido com sucesso",
                "O aluno foi inserido com sucesso",
                "success"
            ).then(() => {
                setName("")
                setMatricula("")
                history.push("/")
            })
        }
    }
    return (
        <Page>
            <h2>Novo aluno</h2>
            <>
                <TextInput type="text" value={name} placeholder="Digite o nome do aluno" onChange={e => setName(e.target.value)}/><br />
                <TextInput type="number" value={matricula} placeholder="Digite a matrícula do aluno" onChange={e => setMatricula(e.target.value)} />
                <Button color="#5bff33" borderColor="green" type="button" onClick={() => newStudent()}>Cadastrar</Button>

            </>
        </Page>
    )
}

export default NewStudent