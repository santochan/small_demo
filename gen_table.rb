
File.open(File.dirname(__FILE__)+"/tmp2.txt", "r",encoding: 'UTF-8').each do |line|
  
  td = line.split(" ").map { |e| "<td>#{e}</td>"  }.join(' ')
  puts "<tr>#{td}</tr>"
end
 