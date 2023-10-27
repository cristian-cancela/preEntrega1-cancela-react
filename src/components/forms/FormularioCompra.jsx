// Nombre del componente: FormularioCompra.js

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';


function FormularioCompra({ data, onDataChange, onCompra }) {
    return (
        <Form onSubmit={onCompra}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Nombre"
                        value={data.nombre}
                        onChange={(e) => onDataChange({ ...data, nombre: e.target.value })}
                    />
                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Control
                        required
                        type="text"
                        placeholder="Apellido"
                        value={data.apellido}
                        onChange={(e) => onDataChange({ ...data, apellido: e.target.value })}
                    />
                    <Form.Control.Feedback>Luce bien!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="email"
                            placeholder="Correo electrónico"
                            aria-describedby="inputGroupPrepend"
                            required
                            value={data.mail}
                            onChange={(e) => onDataChange({ ...data, mail: e.target.value })}
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, ingresa un correo electrónico válido
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
            </Row>

            <Form.Group className="mb-3">
                <Form.Check
                    required
                    label="Acepto los términos y condiciones"
                    feedback="Debes aceptar los términos y condiciones."
                    feedbackType="invalid"
                    checked={data.aceptaTerminos}
                    onChange={(e) => onDataChange({ ...data, aceptaTerminos: e.target.checked })}
                />
            </Form.Group>
            <Button type="submit">Comprar</Button>
        </Form>
    );
}

export default FormularioCompra;
