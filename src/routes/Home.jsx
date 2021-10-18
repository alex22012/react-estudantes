import React, {useEffect, useState} from "react"
import { useHistory } from "react-router"
import { getStudents, deleteStudent } from "../api/api"
import { Page, CardHeader, CardBody, Card, CardFooter, Button } from "../styledComponents"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"

const Home = () => {
    const history = useHistory()
    let [students, setStudents] = useState([])
    const getAllStudents = async () => {
        let json = await getStudents()
        setStudents(json)
    }
    const removeStudent = async (id) => {
        Swal.fire({
            title:"Você tem certeza disso?",
            icon:"warning",
            html:"<p>Se prosseguir, o aluno será removido permanentemente</p>",
            showCancelButton:true,
            showCloseButton:false,
            cancelButtonText:"Cancelar",
            confirmButtonText:"Deletar",
            confirmButtonColor:"red"
        }).then(async (result) => {
            if(result.isConfirmed){
                let json = await deleteStudent(id)
                if(json === "Removido com sucesso"){
                    Swal.fire({
                        title:"Removido com sucesso",
                        icon:"success",
                        html:"O aluno foi removido com sucesso"
                    }).then(() => {
                        getAllStudents()
                    })
                }
            }
        })
        
    }
    useEffect(() => {
        async function fetchData() {
            await getAllStudents()
        }
        fetchData()
    }, [])
    return (
        <Page>
            <h2>Lista de usuários cadastrados</h2>
            <Link to="newstudent"><Button color="blue" borderColor="white"><span style={{color:"white"}}>Novo aluno</span></Button></Link>
            {students.map((student, i) => {
                return (
                    <Card key={i}>
                        <CardHeader>
                            <h3>Aluno: {student.nome}</h3>
                        </CardHeader>
                        <CardBody>
                            <span>Nome do aluno: {student.nome}</span>
                            <span>Matrícula: {student.matricula}</span>
                        </CardBody>
                        <CardFooter>
                            <Button color="#ff0000" borderColor="#990808" type="button" value="Remover" onClick={() => removeStudent(student.id)}><span style={{color:"white"}}>Remover</span></Button>
                            <Link to={"editstudent/"+student.id}><Button color="#3393ff" borderColor="blue" type="button" value="Editar">Atualizar</Button></Link>
                        </CardFooter>
                    </Card>
                )
            })}
        </Page>
        
    )
}

export default Home