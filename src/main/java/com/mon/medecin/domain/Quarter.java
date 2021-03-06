package com.mon.medecin.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import org.springframework.data.elasticsearch.annotations.Document;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;
import java.util.Objects;

/**
 * A Quarter.
 */
@Entity
@Table(name = "quarter")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
@Document(indexName = "quarter")
public class Quarter implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "name", nullable = false)
    private String name;

    @ManyToOne
    private Town town;

    @OneToMany(mappedBy = "town")
    @JsonIgnore
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    private Set<Hospital> writers = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Quarter name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Town getTown() {
        return town;
    }

    public Quarter town(Town town) {
        this.town = town;
        return this;
    }

    public void setTown(Town town) {
        this.town = town;
    }

    public Set<Hospital> getWriters() {
        return writers;
    }

    public Quarter writers(Set<Hospital> hospitals) {
        this.writers = hospitals;
        return this;
    }

    public Quarter addWriter(Hospital hospital) {
        this.writers.add(hospital);
        hospital.setTown(this);
        return this;
    }

    public Quarter removeWriter(Hospital hospital) {
        this.writers.remove(hospital);
        hospital.setTown(null);
        return this;
    }

    public void setWriters(Set<Hospital> hospitals) {
        this.writers = hospitals;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Quarter quarter = (Quarter) o;
        if (quarter.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), quarter.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Quarter{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            "}";
    }
}
