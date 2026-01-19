using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface ILotePersist
    {
      // método get retornará umas lista de lotes por eventoId
      //"eventoId"código chave da tabela evento
      Task<Lote[]> GetLotesByEventoIdAsync(int eventoId);
      // método get retornará apenas 1 lote
      // "id" código chave da tabela lote
      Task<Lote> GetLoteByIdsAsync(int eventoId, int id);
    }
}