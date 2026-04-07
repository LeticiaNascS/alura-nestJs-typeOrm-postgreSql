import { Column, Entity, ManyToOne } from 'typeorm';
import { ProdutoEntity } from './produto.entity';

@Entity('produto_caracteristicas')
export class ProdutoCaracteristica {
  @Column({ name: 'nome', length: 100, nullable: false })
  nome: string;
  @Column({ name: 'descricao', length: 100, nullable: false })
  descricao: string;
  @ManyToOne(()=> ProdutoEntity, (produto=> produto.caracteristica))
  produto: ProdutoEntity;
}
