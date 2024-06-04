import { FiArrowLeft, FiUser, FiCamera, FiDollarSign } from 'react-icons/fi';
import { FaUserTie, FaRegClock } from 'react-icons/fa';
import { MdDateRange } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';

import { Button } from '../../components/Button';
import { Label } from '../../components/Label';
import { Input } from '../../components/Input';

import { Container, Form, Avatar, Select } from './styles';

export function CreateEmployee() {
  return (
    <Container>

      <header>

        <a href="/">

          <FiArrowLeft />

        </a>

      </header>

      <Form>

        <Avatar>

          <img
            src="https://github.com/diogobrasil.png"
            alt="Foto do funcionário"
          />

          <label htmlFor="avatar">

            <FiCamera />

            <input
              id="avatar"
              type="file"
            />

          </label>

        </Avatar>

        <Label htmlFor={"name"} className="label">Nome do Funcionário</Label>

        <Input
          placeholder="Nome completo"
          type="text"
          icon={FiUser}
          id="name"
        />

        <Label htmlFor={"funcao"} className="label">Função</Label>

        <Input
          placeholder="Função"
          type="text"
          icon={FaUserTie}
          id="funcao"
        />

        <Label htmlFor={"cpf"} className="label">Nº do CPF</Label>

        <Input
          placeholder="000.000.000-00"
          type="text"
          id="cpf"
        />

        <Label htmlFor={"cargaHoraria"} className="label">Carga Horária</Label>

        <Input
          type="number"
          icon={FaRegClock}
          id="cargaHoraria"
        />

        <Label htmlFor={"dataPagamento"} className="label">Data de Pagamento</Label>

        <Input
          type="text"
          icon={MdDateRange}
          id="dataPagamento"
        />

        <Label htmlFor={"renda"} className="label">Renda Mensal</Label>

        <Input
          placeholder="Renda"
          icon={FiDollarSign}
          type="number"
          id="renda"
        />

        <Label htmlFor={"filhos"} className="label">Nº de Filhos</Label>

        <Input
          placeholder="Digite o número de filhos do contribuinte"
          type="number"
          id="filhos"
        />

        <Label htlmFor={"estadoCivil"} className="label">Estado Civil</Label>

        <Select id="estadoCivil" name="estadoCivil">
          <option value="solteiro">Solteiro(a)</option>
          <option value="casado">Casado(a)</option>
          <option value="divorciado">Divorciado(a)</option>
          <option value="viuvo">Viúvo(a)</option>
          <IoIosArrowDown />
        </Select>

        <Button title="Salvar" />

      </Form>

    </Container>
  )
}
