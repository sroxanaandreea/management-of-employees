


nume_Defamilir = ["POPA", "POPESCU", "POP", "RADU", "IONESCU", "DUMITRU", "STOICA", "STAN", "GHEORGHE", "RUSU", "MUNTEANU", "MATEI", "CONSTANTIN", "SERBAN", "MARIN", "MIHAI", "STEFAN", "LAZAR", "MOLDOVAN", "VASILE", "TOMA", "CIOBANU", "FLOREA", "ILIE", "STANCIU", "OPREA", "TUDOR", "DUMITRESCU", "DINU", "CRISTEA", "ANDREI", "IONITA", "ANGHEL", "MURESAN", "NEAGU", "BARBU", "SANDU", "ION", "UNGUREANU", "DRAGOMIR", "VLAD", "GEORGESCU", "CONSTANTINESCU", "NAGY", "CRACIUN", "COJOCARU", "MOCANU", "TANASE", "IORDACHE", "ENACHE", "GRIGORE", "PETRE", "VOICU", "LUPU", "BALAN", "DOBRE", "NICOLAE", "BADEA", "COMAN", "IVAN", "ROMAN", "SZABO", "RADULESCU", "LUNGU", "IANCU", "ENE", "MANEA", "PREDA", "DAVID", "BUCUR", "MARINESCU", "STOIAN", "NISTOR", "IACOB", "PAVEL", "FILIP", "AVRAM", "DRAGAN", "SUCIU", "OLTEANU", "PETRESCU", "RUS", "SIMION", "COSTEA", "MARCU", "CRISAN", "LUCA", "ROSU", "NITA", "KOVACS", "DIACONU", "ROTARU", "BOGDAN", "MUNTEAN", "NEDELCU", "DAN", "CRETU", "CALIN", "ZAHARIA", "STANESC" ]
nume = ["Damian", "Dacian", "Dan", "Daniel", "Darius", "David", "Decebal", "Denis", "Dinu", "Dionisie", "Dominic", "Dorel", "Dorian", "Dorin", "Dorinel", "Doru", "Dragomir", "Dragoș", "Ducu", "Dumitru", "Edgar", "Edmond", "Eduard", "Eftimie", "Emanoil", "Emanuel", "Emanuil", "Emil", "Emilian", "Eremia", "Eric", "Ernest", "Eugen", "Eusebiu", "Eustațiu", "Fabian", "Faust", "Felix", "Filip", "Fiodor", "Flaviu", "Florea", "Florentin", "Florian", "Florin", "Francisc", "Gabi", "Gabriel", "Gelu", "George", "Georgel", "Georgian", "Ghenadie", "Gheorghe", "Gheorghiță", "Gherasim", "Ghiță", "Gică", "Gicu", "Giorgian", "Grațian", "Gregorian", "Grigoraș", "Grigore", "Haralamb", "Haralambie", "Horațiu", "Horea", "Horia", "Horică", "Iacob", "Iacov", "Iancu", "Ianis", "Ieremia", "Ilarie", "Ilarion", "Ilie", "Ada", "Adela", "Adelaida", "Adelina", "Adina", "Adriana", "Adnana", "Agata", "Aglaia", "Agripina", "Aida", "Alberta", "Albertina", "Alexandra", "Alexandrina", "Alexia", "Alice", "Beatrice", "Betina", "Bianca", "Blanduzia", "Bogdana", "Brândușa", "Camelia", "Carina", "Carla", "Carmen", "Carmina", "Carol", "Carolina", "Casandra", "Casiana", "Caterina", "Catinca", "Catrina", "Catrinel", "Codruța", "Constanța", "Constantina", "Consuela", "Coralia", "Corina", "Cornelia", "Cosmina", "Crenguța", "Crina", "Cristina", "Daciana", "Dafina", "Daiana", "Dalia", "Dana"]
Gender = ["M", "F"]
dept=[ "General Management", "Marketing Department", "Operations Department", "Finance Department", "Sales Department", "Human Resource  Department", "Purchase Department"]
positions=[ "Product Manager", "VP of Marketing", "Director of Engineering", "Chief Architect", "Software Architect", "Engineering Manager", "Team Lead", "Principal Software Engineer", "Senior Software Developer", "Software Engineer", "Software Developer", "Junior Software Developer", "Intern Software Developer"]

min_sal = 2300
max_sal = 10000


from faker import Faker
fake = Faker()

fake.date_between(start_date='today', end_date='+30y')
# datetime.date(2025, 3, 12)

fake.date_time_between(start_date='-30y', end_date='now')
# datetime.datetime(2007, 2, 28, 11, 28, 16)

# Or if you need a more specific date boundaries, provide the start 
# and end dates explicitly.
import datetime
start_date = datetime.date(year=2015, month=1, day=1)
fake.date_between(start_date=start_date, end_date='+30y')