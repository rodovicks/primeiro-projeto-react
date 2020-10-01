import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'
import { Title, Form, Repositories } from './style';
import api from '../../services/api';

const Dashboard: React.FC = () => {
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault();
        //console.log(newRepo);
        const response = await api.get(`repos/${newRepo}`);

        console.log(response.data);

    }

    return (
        <>
            <img src={logoImg} alt="Github Explorer" />
            <Title>Explore Repositórios no Github</Title>

            <Form onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={(e) => setNewRepo(e.target.value)}
                    placeholder="Digite aqui o nome do Repositório" />
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars3.githubusercontent.com/u/66980466?s=460&u=e775c78a8833e3fa9a8e811769fdbb13483549d5&v=4"
                        alt="Bruno"
                    />
                    <div>
                        <strong>Rodovicks</strong>
                        <p>Teste Decrição</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </ Repositories>
        </>
    );
};

export default Dashboard;