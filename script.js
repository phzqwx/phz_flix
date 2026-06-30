import javax.swing.*;
import java.awt.*;

public class InterfaceCafe {
    public static void main(String[] args) {
        // 1. Cria a janela principal (O fundo do sistema)
        JFrame janela = new JFrame("Meu Café - Java");
        janela.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        janela.setSize(500, 450);
        // Define o fundo geral como cinza claro e neutro
        janela.getContentPane().setBackground(new Color(244, 246, 249)); 
        janela.setLayout(new GridBagLayout()); // Centraliza o conteúdo

        // 2. O "Quadradinho" (Painel central branco)
        JPanel quadradoPrincipal = new JPanel();
        quadradoPrincipal.setBackground(Color.WHITE);
        quadradoPrincipal.setPreferredSize(new Dimension(400, 320));
        quadradoPrincipal.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        quadradoPrincipal.setLayout(new BoxLayout(quadradoPrincipal, BoxLayout.Y_AXIS));

        // 3. Adicionando as informações dentro do quadradinho
        JLabel txtTitulo = new JLabel("Meu Café");
        txtTitulo.setFont(new Font("Arial", Font.BOLD, 24));
        txtTitulo.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel txtSubtitulo = new JLabel("Compartilhando aromas, sabores e histórias");
        txtSubtitulo.setFont(new Font("Arial", Font.ITALIC, 12));
        txtSubtitulo.setForeground(Color.GRAY);
        txtSubtitulo.setAlignmentX(Component.CENTER_ALIGNMENT);

        JLabel txtPost = new JLabel("Meu primeiro café");
        txtPost.setFont(new Font("Arial", Font.BOLD, 16));
        txtPost.setAlignmentX(Component.CENTER_ALIGNMENT);
        
        // Texto longo simulando o parágrafo
        JLabel txtConteudo = new JLabel("<html><center>Bem-vindo ao meu blog sobre café! Aqui vou compartilhar dicas de preparo, curiosidades sobre grãos e métodos de extração.</center></html>");
        txtConteudo.setAlignmentX(Component.CENTER_ALIGNMENT);

        // 4. Botões
        JPanel painelBotoes = new JPanel();
        painelBotoes.setBackground(Color.WHITE);
        painelBotoes.add(new JButton("❤️ Favoritar"));
        painelBotoes.add(new JButton("👍 Like"));
        painelBotoes.add(new JButton("👎 Deslike"));

        // Montando a estrutura do quadrado
        quadradoPrincipal.add(txtTitulo);
        quadradoPrincipal.add(Box.createRigidArea(new Dimension(0, 5)));
        quadradoPrincipal.add(txtSubtitulo);
        quadradoPrincipal.add(Box.createRigidArea(new Dimension(0, 20)));
        quadradoPrincipal.add(txtPost);
        quadradoPrincipal.add(Box.createRigidArea(new Dimension(0, 10)));
        quadradoPrincipal.add(txtConteudo);
        quadradoPrincipal.add(Box.createRigidArea(new Dimension(0, 20)));
        quadradoPrincipal.add(painelBotoes);

        // Coloca o quadradinho dentro da janela cinza
        janela.add(quadradoPrincipal);
        
        // Torna a janela visível
        janela.setVisible(true);
    }
}
