using Newtonsoft.Json;

List<string> familiName = new() { "POPA", "POPESCU", "POP", "RADU", "IONESCU", "DUMITRU", "STOICA", "STAN", "GHEORGHE", "RUSU", "MUNTEANU", "MATEI", "CONSTANTIN", "SERBAN", "MARIN", "MIHAI", "STEFAN", "LAZAR", "MOLDOVAN", "VASILE", "TOMA", "CIOBANU", "FLOREA", "ILIE", "STANCIU", "OPREA", "TUDOR", "DUMITRESCU", "DINU", "CRISTEA", "ANDREI", "IONITA", "ANGHEL", "MURESAN", "NEAGU", "BARBU", "SANDU", "ION", "UNGUREANU", "DRAGOMIR", "VLAD", "GEORGESCU", "CONSTANTINESCU", "NAGY", "CRACIUN", "COJOCARU", "MOCANU", "TANASE", "IORDACHE", "ENACHE", "GRIGORE", "PETRE", "VOICU", "LUPU", "BALAN", "DOBRE", "NICOLAE", "BADEA", "COMAN", "IVAN", "ROMAN", "SZABO", "RADULESCU", "LUNGU", "IANCU", "ENE", "MANEA", "PREDA", "DAVID", "BUCUR", "MARINESCU", "STOIAN", "NISTOR", "IACOB", "PAVEL", "FILIP", "AVRAM", "DRAGAN", "SUCIU", "OLTEANU", "PETRESCU", "RUS", "SIMION", "COSTEA", "MARCU", "CRISAN", "LUCA", "ROSU", "NITA", "KOVACS", "DIACONU", "ROTARU", "BOGDAN", "MUNTEAN", "NEDELCU", "DAN", "CRETU", "CALIN", "ZAHARIA", "STANESC" };
List<string> name = new()
{
    "Damian",
    "Dacian",
    "Dan",
    "Daniel",
    "Darius",
    "David",
    "Decebal",
    "Denis",
    "Dinu",
    "Dionisie",
    "Dominic",
    "Dorel",
    "Dorian",
    "Dorin",
    "Dorinel",
    "Doru",
    "Dragomir",
    "Dragoș",
    "Ducu",
    "Dumitru",
    "Edgar",
    "Edmond",
    "Eduard",
    "Eftimie",
    "Emanoil",
    "Emanuel",
    "Emanuil",
    "Emil",
    "Emilian",
    "Eremia",
    "Eric",
    "Ernest",
    "Eugen",
    "Eusebiu",
    "Eustațiu",
    "Fabian",
    "Faust",
    "Felix",
    "Filip",
    "Fiodor",
    "Flaviu",
    "Florea",
    "Florentin",
    "Florian",
    "Florin",
    "Francisc",
    "Gabi",
    "Gabriel",
    "Gelu",
    "George",
    "Georgel",
    "Georgian",
    "Ghenadie",
    "Gheorghe",
    "Gheorghiță",
    "Gherasim",
    "Ghiță",
    "Gică",
    "Gicu",
    "Giorgian",
    "Grațian",
    "Gregorian",
    "Grigoraș",
    "Grigore",
    "Haralamb",
    "Haralambie",
    "Horațiu",
    "Horea",
    "Horia",
    "Horică",
    "Iacob",
    "Iacov",
    "Iancu",
    "Ianis",
    "Ieremia",
    "Ilarie",
    "Ilarion",
    "Ilie",
    "Ada",
    "Adela",
    "Adelaida",
    "Adelina",
    "Adina",
    "Adriana",
    "Adnana",
    "Agata",
    "Aglaia",
    "Agripina",
    "Aida",
    "Alberta",
    "Albertina",
    "Alexandra",
    "Alexandrina",
    "Alexia",
    "Alice",
    "Beatrice",
    "Betina",
    "Bianca",
    "Blanduzia",
    "Bogdana",
    "Brândușa",
    "Camelia",
    "Carina",
    "Carla",
    "Carmen",
    "Carmina",
    "Carol",
    "Carolina",
    "Casandra",
    "Casiana",
    "Caterina",
    "Catinca",
    "Catrina",
    "Catrinel",
    "Codruța",
    "Constanța",
    "Constantina",
    "Consuela",
    "Coralia",
    "Corina",
    "Cornelia",
    "Cosmina",
    "Crenguța",
    "Crina",
    "Cristina",
    "Daciana",
    "Dafina",
    "Daiana",
    "Dalia",
    "Dana"
};
List<string> gender = new() { "M", "F" };
List<string> dept = new() { "General Management", "Marketing Department", "Operations Department", "Finance Department", "Sales Department", "Human Resource  Department", "Purchase Department" };
List<string> positions = new() { "Product Manager", "VP of Marketing", "Director of Engineering", "Chief Architect", "Software Architect", "Engineering Manager", "Team Lead", "Principal Software Engineer", "Senior Software Developer", "Software Engineer", "Software Developer", "Junior Software Developer", "Intern Software Developer" };
int min_sal = 2300;
int max_sal = 10000;

DateTime birthdayMax = new DateTime(1999, 1, 1);

DateTime startDate = new DateTime(2009,1,1);
DateTime endDate = new DateTime(2022,8,1);

int minLenght = 0;
minLenght = familiName.Count <= name.Count ? familiName.Count : name.Count;

Random random = new Random();

List<User> users = new List<User>();

for(int i = 0; i < minLenght; i++)
{
    TimeSpan timeSpan = endDate - startDate;
    TimeSpan newSpan = new TimeSpan(0, random.Next(0, (int)timeSpan.TotalMinutes), 0);
    DateTime newDate = startDate + newSpan;

    TimeSpan timeSpan1 = endDate - startDate;
    TimeSpan newSpan1 = new TimeSpan(0, random.Next(0, (int)timeSpan1.TotalMinutes), 0);
    DateTime newDate1 = startDate + newSpan1;

    users.Add(new User
    {
        Email = $"{name[i].ToLower()}.{familiName[i].ToLower()}@gmail.com",
        FirstName = name[i],
        LastName = familiName[i],
        BirthDay = new DateTime(random.Next(1970, 1999), random.Next(1, 12), random.Next(1, 26)).ToString("yyyy-MM-dd"),
        Gender = gender.ElementAt(random.Next(gender.Count())),
        Departament = dept.ElementAt(random.Next(dept.Count())),
        EnterpriseID = Guid.NewGuid().ToString(),
        Salary = random.Next(min_sal, max_sal),
        Position = positions.ElementAt(random.Next(positions.Count())),
        StartDate = newDate.ToString("yyyy-MM-dd"),
        EndDate = newDate1.ToString("yyyy-MM-dd"),
    });
}

string usersJson = JsonConvert.SerializeObject(users);

Console.WriteLine(usersJson);

public class User
{
    [JsonProperty("email")]
    public string Email { get; set; }

    [JsonProperty("firstName")]
    public string FirstName { get; set; }

    [JsonProperty("lastName")]
    public string LastName { get; set; }

    [JsonProperty("birthDay")]
    public string BirthDay { get; set; }

    [JsonProperty("gender")]
    public string Gender { get; set; }

    [JsonProperty("departament")]
    public string Departament { get; set; }

    [JsonProperty("position")]
    public string Position { get; set; }

    [JsonProperty("salary")]
    public int Salary { get; set; }

    [JsonProperty("startDate")]
    public string StartDate { get; set; }

    [JsonProperty("endDate")]
    public string EndDate { get; set; }

    [JsonProperty("enterpriseID")]
    public string EnterpriseID { get; set; }
}
