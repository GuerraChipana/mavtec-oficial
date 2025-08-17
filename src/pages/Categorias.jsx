import React, { useState, useEffect } from "react";
import { categories } from "../constants/categories";
import { Folder, ChevronRight, X } from "lucide-react";
import "../styles/categories.css";
import { useNavigate } from "react-router-dom";

export default function Categorias() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [machineDetails, setMachineDetails] = useState(null); // Para el modal

  useEffect(() => {
    if (!selected && categories.length) {
      setSelected(categories[0]);
    }
  }, [selected]);

  if (!categories.length) {
    return <div className="catmach-empty">No hay categorías disponibles.</div>;
  }

  const onSelectCategory = (cat) => {
    setSelected(cat);
    const main = document.querySelector(".catmach-main");
    if (main) main.scrollTop = 0;
  };

  const openModal = (machine) => {
    setMachineDetails(machine);
  };

  const closeModal = () => {
    setMachineDetails(null);
  };

  return (
    <div className="catmach-page">
      {/* Encabezado */}
      {/* <section className="catmach-top">
        <div className="catmach-top-inner">
          <h1 className="catmach-title">Catálogo de Maquinaria</h1>
          <p className="catmach-subtitle">
            Selecciona una categoría para explorar sus máquinas disponibles.
          </p>
        </div>
      </section> */}

      <div className="catmach-layout">
        {/* Sidebar */}
        <aside className="catmach-sidebar" aria-label="Lista de categorías">
          <div className="catmach-sidebar-header">
            <h3>Categorías</h3>
            <span className="catmach-count">{categories.length}</span>
          </div>
          <ul className="catmach-list">
            {categories.map((cat) => {
              const active = selected?.id_categoria === cat.id_categoria;
              return (
                <li
                  key={cat.id_categoria}
                  className={`catmach-list-item ${active ? "catmach-active" : ""}`}
                  onClick={() => onSelectCategory(cat)}
                >
                  <div className="catmach-item-left">
                    <Folder size={18} />
                    <span>{cat.nombre}</span>
                  </div>
                  <div className="catmach-item-right">
                    {cat.machines?.length ?? 0}
                    <ChevronRight size={16} />
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* Contenido principal */}
        <div className="catmach-main">
          {selected ? (
            <>
              <section className="catmach-main-top">
                <h2 className="catmach-main-title">{selected.nombre}</h2>
                <p className="catmach-main-desc">{selected.descripcion}</p>
              </section>

              <section className="catmach-machines">
                <h3 className="catmach-section-title">Máquinas disponibles</h3>
                <div className="catmach-grid">
                  {selected.machines?.length ? (
                    selected.machines.map((m) => (
                      <div key={m.id_maquina} className="catmach-card">
                        <div className="catmach-card-media">
                          <img
                            src={m.image || "/images/placeholder.png"}
                            alt={m.name_machine || "Máquina"}
                            className="catmach-card-img"
                          />
                          <span className="catmach-card-badge">{m.marca || "Marca"}</span>
                        </div>
                        <div className="catmach-card-body">
                          <h4 className="catmach-card-title">{m.name_machine}</h4>
                          <p className="catmach-card-text">{m.description}</p>
                          <div className="catmach-card-actions">

                            <button
                              className="catmach-btn-primary"
                              onClick={() => navigate("/cotizaciones")}
                            >
                              Solicitar cotización
                            </button>                            <button
                              className="catmach-btn-outline"
                              onClick={() => openModal(m)}
                            >
                              Ver detalles
                            </button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="catmach-noitems">
                      No hay máquinas en esta categoría.
                    </div>
                  )}
                </div>
              </section>
            </>
          ) : (
            <div className="catmach-no-selection">
              Selecciona una categoría para comenzar.
            </div>
          )}
        </div>
      </div>

      {/* Modal de detalles */}
      {
        machineDetails && (
          <div className="catmach-modal-overlay" onClick={closeModal}>
            <div className="catmach-modal" onClick={(e) => e.stopPropagation()}>
              <button className="catmach-modal-close" onClick={closeModal}>
                <X size={20} />
              </button>

              <img
                src={machineDetails.image || "/images/placeholder.png"}
                alt={machineDetails.name_machine}
                className="catmach-modal-img"
              />

              <div className="catmach-modal-content">
                <div>
                  <h2>{machineDetails.name_machine}</h2>
                  <p><strong>Marca:</strong> {machineDetails.marca}</p>
                  <p>{machineDetails.description}</p>
                  {/* <p><strong>ID Máquina:</strong> {machineDetails.id_maquina}</p> */}
                  {/* <ul className="catmach-specs">
                    <li>Potencia: 150 HP</li>
                    <li>Peso: 20 toneladas</li>
                    <li>Uso recomendado: Obras grandes</li>
                  </ul> */}
                </div>
                <div className="catmach-modal-actions">
                  <button className="catmach-btn-primary">Solicitar cotización</button>
                </div>
              </div>
            </div>
          </div>
        )
      }

    </div >
  );
}
