locale.de = {
    modes: {
        add_area: {
            title: "Fläche",
            description: "Füge Parks, Gebäude, Seen oder andere Flächen zur Karte hinzu.",
            tail: "Klicke in die Karte, um das Zeichnen einer Fläche wie einen Park, einen See oder Gebäude zu starten."
        },
        add_line: {
            title: "Linie",
            description: "Linien können Autobahnen, Straßen, Fußwege oder sogar Kanäle sein.",
            tail: "Klicke in die Karte, um das Zeichnen einer Straße eines Pfades oder einer Route zu starten."
        },
        add_point: {
            title: "Punkt",
            description: "Restaurants, Denkmäler und Briefkästen sind Punkte",
            tail: "Klicke in die Karte, um einen Punkt hinzuzufügen."
        },
        browse: {
            title: "Navigation",
            description: "Verschieben und Vergrößern/Verkleinern des Kartenausschnitts."
        },
        draw_area: {
            tail: "Klicke, um Punkte zur Fläche hinzuzufügen. Klicke auf den ersten Punkt, um die Fläche abzuschließen."
        },
        draw_line: {
            tail: "Klicke, um mehr Punkte zur Linie hizuzufügen. Klicke auf eine andere Linie um die Linien zu verbinden und klicke doppelt, um die Linie zu beenden."
        }
    },

    operations: {
        add: {
            annotation: {
                point: "Punkt hinzugefügt.",
                vertex: "Stützpunkt einem Weg hinzugefügt."
            }
        },
        start: {
            annotation: {
                line: "Linie begonnen.",
                area: "Fläche begonnen."
            }
        },
        'continue': {
            annotation: {
                line: "Linie fortgesetzt.",
                area: "Fläche fortgesetzt."
            }
        },
        cancel_draw: {
            annotation: "Zeichnen abgebrochen."
        },
        change_tags: {
            annotation: "Tags verändert."
        },
        circularize: {
            title: "Abrunden",
            description: "Runde dies ab.",
            key: "O",
            annotation: {
                line: "Runde eine Linie ab.",
                area: "Runde eine Fläche ab."
            }
        },
        orthogonalize: {
            title: "Rechtwinkligkeit herstellen",
            description: "Diese Ecken rechtwinklig ausrichten.",
            key: "Q",
            annotation: {
                line: "Die Ecken einer Linie rechtwinklig ausgerichtet.",
                area: "Die Ecken einer Fläche rechtwinklig ausgerichtet."
            }
        },
        'delete': {
            title: "Löschen",
            description: "Lösche dies aus der Karte.",
            key: "⌫",
            annotation: {
                point: "Punkt gelöscht.",
                vertex: "Stützpunkt aus einem Weg gelöscht.",
                line: "Linie gelöscht.",
                area: "Fläche gelöscht.",
                relation: "Verbindung gelöscht.",
                multiple: "{n} Objekte gelöscht."
            }
        },
        connect: {
            annotation: {
                point: "Weg mit einem Punkt verbunden.",
                vertex: "Weg mit einem anderem Weg verbunden.",
                line: "Weg mit einer Linie verbunden.",
                area: "Weg mit einer Fläche verbunden."
            }
        },
        disconnect: {
            title: "Trennen",
            description: "Trenne diese Wege voneinander.",
            key: "D",
            annotation: "Wege getrennt."
        },
        merge: {
            title: "Vereinigen",
            description: "Vereinige diese Linien.",
            key: "C",
            annotation: "{n} Linien vereinigt."
        },
        move: {
            title: "Verschieben",
            description: "Verschiebe dieses Objekt an einen anderen Ort.",
            key: "M",
            annotation: {
                point: "Punkt verschoben.",
                vertex: "Stützpunkt in einen Weg veschoben.",
                line: "Linie verschoben.",
                area: "Fläche verschoben."
            }
        },
        reverse: {
            title: "Umkehren",
            description: "Ändere die Richtung dieser Linie.",
            key: "V",
            annotation: "Linienrichtung umgekehrt."
        },
        split: {
            title: "Teilen",
            description: "Teile dies in zwei Wege an diesem Punkt.",
            key: "X",
            annotation: "Weg geteilt."
        }
    },

    nothing_to_undo: "Nichts zum Rückgängigmachen.",
    nothing_to_redo: "Nichts zum Wiederherstellen.",

    just_edited: "Sie haben gerade OpenStreetMap editiert!",
    browser_notice: "Dieser Editor wird von Firefox, Chrome, Safari, Opera, und Internet Explorer (Version 9 und höher) unterstzützt. Bitte aktualisieren Sie Ihren Browser oder nutzen Sie Potlatch 2, um die Karte zu modifizieren.",
    view_on_osm: "Auf OSM anschauen",
    zoom_in_edit: "Hineinzoomen, um die Karte zu bearbeiten",
    logout: "Abmelden",
    report_a_bug: "Programmfehler melden",

    commit: {
        title: "Save Changes",
        description_placeholder: "Brief description of your contributions",
        upload_explanation: "The changes you upload as {user} will be visible on all maps that use OpenStreetMap data.",
        save: "Save",
        cancel: "Cancel",
        warnings: "Warnings",
        modified: "Modified",
        deleted: "Deleted",
        created: "Created"
    },

    contributors: {
        list: "Diese Kartenansicht enthält Beiträge von:",
        truncated_list: "Diese Kartenansicht enthält Beiträge von: {users} und {count} Anderen"
    },

    geocoder: {
        title: "Suche einen Ort",
        placeholder: "suche einen Ort",
        no_results: "Der Ort '{name}' konnte nicht gefunden werden"
    },

    geolocate: {
        title: "Show My Location"
    },

    inspector: {
        no_documentation_combination:  "Für dieses Attribut ist keine Dokumentation verfügbar.",
        no_documentation_key: "Für dises Schlüsselwort ist keine Dokumentation verfügbar",
        new_tag: "Neues Attribut",
        edit_tags: "Attribute bearbeiten",
        okay: "OK",
        view_on_osm: "View on OSM"
    },

    layerswitcher: {
        title: "Hintergrund",
        description: "Hintergrundeinstellungen",
        percent_brightness: "{opacity}% Helligkeit",
        fix_misalignment: "Fehlerhafte Ausrichtung reparieren",
        reset: "Zurücksetzen"
    },

    restore: {
        description: "You have unsaved changes from a previous editing session. Do you wish to restore these changes?",
        restore: "Restore",
        reset: "Reset"
    },

    save: {
        title: "Speichern",
        help: "Speichere Änderungen auf OpenStreetMap, um diese für andere Nutzer sichtbar zu machen",
        error: "Beim Speichern ist ein Fehler aufgetreten",
        uploading: "Änderungen werden zu OpenStreetMap hochgeladen.",
        unsaved_changes: "Ungespeicherte Änderugen vorhanden",
    },

    source_switch: {
        live: "live",
        dev: "dev"
    },

    tag_reference: {
        description: "Beschreibung",
        on_wiki: "{tag} on wiki.osm.org",
        used_with: "used with {type}"
    },

    validations: {
        untagged_point: "Punkt ohne Attribute, der kein Teil einer Linie oder Fläche ist",
        untagged_line: "Linie ohne Attribute",
        untagged_area: "Fläche ohne Attribute",
        tag_suggests_area: "Das Attribut {tag} suggeriert eine Fläche, ist aber keine Fläche",
        deprecated_tags: "Veralterte Attribute: {tags}"
    },

    zoom: {
        in: "Hineinzoomen",
        out: "Herauszoomen"
    }
};
