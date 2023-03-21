import React, { useEffect, useState } from "react"
import { IStudentWithProfileImage } from "../../../../typings/data";
import PageContainer from "../../components/pageContainer";
import StudentItem from "../../components/studentItem";
import { getResponseErrorMessage, isErrorResponse } from "../../helpers/response";
import StudentService from "../../services/students";
import S from "./styles";

const StudentsPage: React.FC = () => {

  const [studentData, setStudentData] = useState<IStudentWithProfileImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await StudentService.getAllStudentsWithProfileImages()
    if (isErrorResponse(response)) {
      setError(getResponseErrorMessage(response))
      setLoading(false)
      return
    }
    setStudentData(response.data)
    setLoading(false)
    return
  }

  const renderLoading = () => <p>Loading...</p>
  
  const renderError = () => <p>{error}</p>

  const renderStudentList = () => (
    <S.StudentListContainer>
      {studentData.map((student) => <StudentItem {...student} />)}
    </S.StudentListContainer>
  )

  const renderContent = () => {
    if (loading) return renderLoading()
    if (error) return renderError()
    return renderStudentList()
  }

  return (
    <PageContainer>
      {renderContent()}
    </PageContainer>
  )
}

export default StudentsPage
