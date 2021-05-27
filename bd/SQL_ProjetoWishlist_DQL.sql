--DQL 
use Projeto_WishList

Select Email,Senha,Descricaodesejo from ListaDesejos
inner join Usuarios
on ListaDesejos.IdUsuario = Usuarios.IdUsuario