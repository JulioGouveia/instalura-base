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
import PropTypes from 'prop-types';
import { Button } from '../../commons/Button';
import TextField from '../../form/TextField';
import { Text } from '../../foundation/Text';
import { Grid } from '../../foundation/Grid';
import { Box } from '../../commons/Box';

function FormBase () {

    const [formData, setFormData] = React.useState({
        email: 'lalaland@email.com',
        usuario: 'lalaland',
    });

    function formHandler (event) {
        const fieldName = event.target.getAttribute('name');
       setFormData({
         ...formData,
         [fieldName]: event.target.value,
       });
     }

     const isFormDisable = formData.usuario.length === 0 || formData.email.length === 0;

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>

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
                    placeholder="E-mail" 
                    name="email" 
                    value={formData.email}
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
            </div>
        </form>

    );
}

export default function FormCadastro ({ propsDoModal }) {

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
            <FormBase />
          </Box>
        </Grid.Col>
    </Grid.Row>

    );
}

FormCadastro.propTypes = {
    propsDoModal: PropTypes.element.isRequired,
   
  };