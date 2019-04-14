

larry = Squirrel.find_or_create_by(name: "larry", eye_color: 'hazel', temperament: 'chill')
scary = Squirrel.find_or_create_by(name: "scary", eye_color: 'red', temperament: 'scary')
squirriliam = Squirrel.find_or_create_by(name: "squirriliam", eye_color: 'steel gray', temperament: 'stoic & regal')

maple = Tree.find_or_create_by(species: 'Maple')
willow = Tree.find_or_create_by(species: 'Willow')
groot = Tree.find_or_create_by(species: 'Groot')

Nest.find_or_create_by(squirrel: scary, tree_id: maple.id)

Nest.find_or_create_by(squirrel: squirriliam, tree: willow)
