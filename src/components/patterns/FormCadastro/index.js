/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable eol-last */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable react/jsx-props-no-multi-spaces */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-tag-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */

import React from 'react';
import { Lottie } from '@crello/react-lottie';
import PropTypes from 'prop-types';
import sucessAnimation from './animations/sucessAnimation.json';
import errorAnimation from './animations/errorAnimation.json';
import TextField from '../../form/TextField';
import { Button } from '../../commons/Button';
import { Text } from '../../foundation/Text';
import { Grid } from '../../foundation/Grid';
import { Box } from '../../commons/Box';

const formStates = {
    DEFAULT: 'DEFAULT',
    LOADING: 'LOADING',
    DONE: 'DONE',
    ERROR: 'ERROR',
  };

function SubmitFeedbackForm ({ isFormSubmited, submissionStatus }) {

    if (isFormSubmited && submissionStatus === formStates.DONE) {
        return (
            <Box
                display="flex"
                justifyContent="space-around"
            >
            <Lottie
                width="150px"
                height="150px"
                config={{ 
                    animationData: sucessAnimation, 
                    loop: false,
                    autoplay: true, 
                }}
            />
            {/* https://lottiefiles.com/43920-success-alert-icon */}
            </Box>
        );
    }

    if (isFormSubmited && submissionStatus === formStates.ERROR) {
        return (
            <Box
                display="flex"
                justifyContent="space-around"
            >
            <Lottie
                width="150px"
                height="150px"
                config={{
                    animationData: errorAnimation, 
                    loop: false, 
                    autoplay: true, 
                    loopComplete: true,
                }}
            />
            {/* https://lottiefiles.com/43920-success-alert-icon */}
            </Box>
        );
    }

    return (<div></div>);
}

function FormBase ({ setModalState }) {

    const usuarioVazio = {
        nome: '',
        usuario: '',
    };

    const [formData, setFormData] = React.useState(usuarioVazio);

    const [isFormSubmited, setIsFormSubmited] = React.useState(false);
    const [submissionStatus, setSubmissionStatus] = React.useState(formStates.DEFAULT);

    function formHandler (event) {
        const fieldName = event.target.getAttribute('name');
       setFormData({
         ...formData,
         [fieldName]: event.target.value,
       });
     }

     const isFormDisable = formData.usuario.length === 0 || formData.nome.length === 0;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();

            setIsFormSubmited(true);

            const myHeaders = new Headers();
            myHeaders.append('Content-Type', 'application/json');
            
            const cadastroDTO = {
                username: formData.usuario,
                name: formData.nome,
            };
            
            const myInit = {
                method: 'POST',
                headers: myHeaders,
                body: JSON.stringify(cadastroDTO),
            };

            fetch('https://instalura-api.vercel.app/api/users', myInit)
            .then((respostaDoServidor) => {
                if (respostaDoServidor.ok) {
                    return respostaDoServidor.json();
                }
                  
                throw new Error('Não foi possível cadastrar o usuário agora :(');
              })
              .then((respostaConvertidaEmObjeto) => {
                setSubmissionStatus(formStates.DONE);
                // eslint-disable-next-line no-console
                console.log(respostaConvertidaEmObjeto);
              })
              .catch((error) => {
                setSubmissionStatus(formStates.ERROR);
                // eslint-disable-next-line no-console
                console.error(error);
              })
              .finally(() => setFormData(usuarioVazio));

        }}>
        <Button
                type="button"
                margin={{
                    xs: 'auto',
                    md: 'initial',
                    }}
                    variant="primary.main"
                    display="block"
                    onClick={() => { setModalState(false); }}
                    style={{
                    position: 'absolute', top: '30px', right: '30px',
                }}
            >
                X
        </Button>
        <Text
            variant="title"
            tag="h1"
            color="tertiary.main"
        >
            Pronto para saber da vida dos outros?
        </Text>
        <Text
            variant="paragraph1"
            tag="p"
            color="tertiary.light"
            marginBottom="32px"
        >
            Você está a um passo de saber tudoo que está
            rolando no bairro, complete seu cadastro agora!
        </Text>
            <div> 
                <TextField 
                    placeholder="Nome" 
                    name="nome" 
                    value={formData.nome}
                    onChange={formHandler}
                />

                <TextField 
                    placeholder="Usuário"
                    name="usuario"
                    value={formData.usuario}
                    onChange={formHandler}
                />
                
                <Button
                    variant="primary.main"
                    type="submit"
                    disabled={isFormDisable}
                >
                    Cadastrar
                </Button>

                <SubmitFeedbackForm 
                    isFormSubmited={isFormSubmited} 
                    submissionStatus={submissionStatus}
                />

            </div>
        </form>

    );
}

// eslint-disable-next-line react/prop-types
export default function FormCadastro ({ propsDoModal, setModalState }) {

    return (
    <Grid.Row
        marginLeft={0}
        marginRight={0}
        flex={1}
        justifyContent="flex-end"
    >
        <Grid.Col
            display="flex"
            paddingRight={{ md: '0' }}
            flex={1}
            value={{ xs: 12, md: 5, lg: 4 }}
        >
          <Box
                boxShadow="-10px 0px 24px rgba(7, 12, 14, 0.1)"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                flex={1}
                padding={{
                xs: '16px',
                md: '85px',
            }}
            backgroundColor="white"
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...propsDoModal}
          >
            <FormBase setModalState={setModalState}/>
          </Box>
        </Grid.Col>
    </Grid.Row>

    );
}

FormBase.propTypes = {
    setModalState: PropTypes.func.isRequired, 
  };


SubmitFeedbackForm.propTypes = {
    isFormSubmited: PropTypes.bool.isRequired,
    submissionStatus: PropTypes.string.isRequired, 
  };

FormCadastro.propTypes = {
    setModalState: PropTypes.func.isRequired,
    propsDoModal: PropTypes.objectOf(PropTypes.any).isRequired, 
  };