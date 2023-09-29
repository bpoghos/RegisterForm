import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { Container, Table } from "react-bootstrap"

const MainTable = () => {
    return (
        <Container className="mb-5">
            <h2 className="display-6 text-center mb-4">Compare plans</h2>
            <Table className="text-center m-auto" style={{width: '75%'}}>
                <thead>
                    <tr>
                        <th style={{width: '34%'}}></th>
                        <th style={{width: '22%'}}>Free</th>
                        <th style={{width: '22%'}}>Pro</th>
                        <th style={{width: '22%'}}>Enterprise</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th className="text-start">Public</th>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                    <tr>
                        <th className="text-start">Private</th>
                        <td></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                    <tr>
                        <th className="text-start">Permissions</th>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                    <tr>
                        <th className="text-start">Sharing</th>
                        <td></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                    <tr>
                        <th className="text-start">Unlimited members</th>
                        <td></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                    <tr>
                        <th className="text-start">Extra security</th>
                        <td></td>
                        <td></td>
                        <td><FontAwesomeIcon icon={faCheck} style={{width: 24, height:24}}/></td>
                    </tr>
                </tbody>
            </Table>
        </Container>

    )
}

export default MainTable