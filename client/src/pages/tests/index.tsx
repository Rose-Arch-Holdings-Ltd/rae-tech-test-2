import React, { useEffect, useState } from "react";
import { TTest } from "../../../../typings/data";
import PageContainer from "../../components/pageContainer";
import TestItem from "../../components/testItem";
import { getResponseErrorMessage, isErrorResponse } from "../../helpers/response";
import TestsService from "../../services/tests";
import S from "./styles";

const TestsPage: React.FC = () => {

  const [testData, setTestData] = useState<TTest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await TestsService.getAllTests();
    if (isErrorResponse(response)) {
      setError(getResponseErrorMessage(response));
      setLoading(false);
      return;
    }
    setTestData(response.data);
    setLoading(false);
    return;
  };

  const renderLoading = () => <p>Loading...</p>;

  const renderError = () => <p>{error}</p>;

  const renderStudentList = () => (
    <S.TestsListContainer>
      {testData.map((test) => <TestItem {...test} />)}
    </S.TestsListContainer>
  );

  const renderContent = () => {
    if (loading) return renderLoading();
    if (error) return renderError();
    return renderStudentList();
  };

  return (
    <PageContainer>
      {renderContent()}
    </PageContainer>
  );
};

export default TestsPage;
