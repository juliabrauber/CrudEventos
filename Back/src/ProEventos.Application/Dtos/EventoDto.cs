using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProEventos.Application.Dtos
{
    public class EventoDto
    {
        public int Id { get; set; }
        public string Local { get; set; }
        public string DataEvento { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório."),
        MinLength(3, ErrorMessage ="{0} deve ter no mínimo 4 caracteres."),
        MaxLength(50, ErrorMessage ="{0} deve ter no maxímo 50 caracteres.")]
        public string Tema { get; set; }
        
        [Display(Name = "Qtd Pessoas"),
        Range(1, 120000, ErrorMessage ="{0} não pode ser menor que 1 e maior que 120.000 pessoas.")]
        public int QtdPessoas { get; set; }

        [RegularExpression(@".*\.(gif|jpg|jpe?g|png|bmp)$",
        ErrorMessage ="Não é uma imagem válida.((gif,jpg,jpeg,png,bmp))")]
        public string ImagemURL { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório."),
        Phone(ErrorMessage ="O campo {0} está com número inválido. ")]
        public string Telefone { get; set; }

        [Required(ErrorMessage ="O campo {0} é obrigatório."),
        Display(Name = "e-mail"),
        EmailAddress(ErrorMessage ="O campo {0} deve ser um e-mail válido.")]
        public string Email { get; set; }
        public IEnumerable<LoteDto> Lotes { get; set; }
        public IEnumerable<RedesocialDto> RedesSociais { get; set; }
        public IEnumerable<PalestranteDto> Palestrantes { get; set; }

    }
}